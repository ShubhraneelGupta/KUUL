import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from '@/db/index'
import { eq, sql } from 'drizzle-orm'
import * as schema from '@/db/schema'


export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET  

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  const eventType = evt.type


  //user created or signed up
  if (eventType === 'user.created') {
    let { 
        id, 
        first_name, 
        last_name, 
        email_addresses, 
        username
    } = evt.data;
    if(first_name == null) first_name = 'none';

    
    if (!id || typeof id !== 'string') {
        return new Response('Invalid User', { status: 401});
    }

    const email = email_addresses[0]?.email_address;
    if (!email) {
        return new Response('Email Id not found', {status: 401})
    }

    const [userPresent] = await db.select({
      field1: schema.users.id
    }).from(schema.users).where(eq(schema.users.email, email))

    if(!userPresent){
      try{
        await db.insert(schema.users).values({
          id: id,
          firstName: first_name,
          lastName: last_name, 
          email: email,
          username: username
        });
  
        return new Response('User Created', {status: 201});
      }
      catch(err){
        return new Response('Failed to create User', {status: 500});
      }
    }

    else {
      try{
        await db.update(schema.users)
              .set({
                firstName: first_name,
                lastName: last_name,
                email: email,
                username: username,
                deletedAt: null
              }).where(eq(schema.users.email, email));

        return new Response('User Created', {status: 201});
      }catch(err){
        return new Response('Failed to create User', {status: 500})
      }
    }
  }


  //User updated
  if(eventType === 'user.updated'){
    let { 
        id, 
        first_name, 
        last_name, 
        email_addresses, 
        username
      } = evt.data;

      const email = email_addresses[0].email_address;
      try{
        await db.update(schema.users)
                .set({
                  firstName: String(first_name),
                  lastName: last_name, 
                  email: email,
                  username: username
                }).where(eq(schema.users.id, id))

        return new Response("User Updated", {status: 201})
      }catch(err){
        return new Response("Failed to update the user", {status: 500})
      }
  }


  //user Deleted
  if(eventType === 'user.deleted'){
    const {id} = evt.data;
    await db.update(schema.users)
            .set({deletedAt: sql`now()`})
            .where(eq(schema.users.id, String(id)))
  }


  return new Response('Webhook received', { status: 200 })
}