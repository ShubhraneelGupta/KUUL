import {auth} from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/db/index';

export default async function Page(){
    const {userId} = await auth();
    const user = await currentUser();
    return <div className="h-screen w-screen flex flex-col items-center justify-center relative">
        
        {/* top bar */}
        <div className='flex w-2/5 h-auto items-center relative overflow-hidden p-10' >
            <img src="/hero-bg.png" alt="banner" className='w-full object-fit absolute top-0 left-0 -z-10'/>
            <div className='rounded-full w-20 h-20 overflow-hidden flex'>
                <img src={`${user?.imageUrl}`} alt={`${user?.firstName}`} className='h-full w-full object-cover'/>
            </div>
            <div className='text-3xl p-4'>
                {user?.fullName}
            </div>
        </div>

        {/* Events */}
        <div className='w-2/5'>
            <h1>Upcoming events</h1>
        </div>
    </div>
}