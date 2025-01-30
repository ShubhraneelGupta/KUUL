import {db} from '@/db/index'
import * as schema from '@/db/schema'
import Link from 'next/link'

export default async function Page(){
    const artistData = await db.select().from(schema.artists)
    return <div className='flex h-screen w-screen items-center justify-center ml-20 max-sm:flex-col max-sm:ml-10'>
                {artistData.map((artist, index) => {
                    return <div className='border-2 p-2 m-2 flex flex-col items-center justify-center' key={index}>
                        <div className='flex items-center'>
                            <div className='text-3xl'>
                                <Link href={`/find/artists/${artist.id}`}>
                                {artist.name}
                                </Link>
                            </div>
                            <div className='border-2 rounded-xl m-2 p-2'>
                                {artist.userId ? "verified" : "not Verified"}
                            </div>
                        </div>
                    </div>
                })}
        </div>
}