import {NextResponse, type NextRequest} from 'next/server'
import {auth, currentUser} from '@clerk/nextjs/server'
export async function GET(request: NextRequest){
    const {userId} = await auth();
    if(userId) return new Response('Hello, Next.js!', {
        status: 200,
      })
    else return new Response('Nothing', {
        status: 400
    })
}