import * as schema from '@/db/schema'
import {db} from '@/db/index'
import {auth} from '@clerk/nextjs/server'


export async function POST(req: Request){
    const {userId} = await auth();
    if(!userId) return new Response ('Unauthorized', {status: 401});
    
    const data = req.body;
    const stringData = String(data);

    try{
        await db.insert(schema.artists).values({
            userId: userId,
            name: "what is life the band",
            details: "We are a heavy metal band based in florida and new hampshire, we are famous for our heart wrenching screams and nazi make up.",
            claimed: true
        })

        return new Response('Role Assigned', {status: 201})
    }

    catch(err){
        return new Response(JSON.stringify(err), {status: 400})
    }

}