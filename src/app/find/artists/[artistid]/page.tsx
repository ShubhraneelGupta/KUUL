import { db } from '@/db/index'
import * as schema from '@/db/schema'
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
    try {
        const { artistid } = await params;
        const artistId = Number(artistid);
        
        if (isNaN(artistId)) {
            return notFound();
        }

        const [artist] = await db.select()
            .from(schema.artists)
            .where(eq(schema.artists.id, artistId));

        if (!artist) {
            return notFound();
        }

        return (
            <div className='h-screen w-screen flex flex-col items-center justify-center'>
                <div className='flex items-center text-3xl'>
                    {artist.name}
                </div>
                <div>
                    {artist.details}
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error fetching artist:', error);
        return notFound();
    }
}