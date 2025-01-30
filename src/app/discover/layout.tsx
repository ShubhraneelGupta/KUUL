'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Events({children}:{children: React.ReactNode}) {
    const pathName = usePathname();
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="fixed left-0 flex flex-col items-center gap-20 max-sm:-left-10"> 
                <div 
                    className={`rotate-90 text-3xl hover:text-kuul-green ${
                        pathName === '/discover/events' ? 'text-kuul-green' : ''
                    } max-sm:text-2xl`}
                >
                    <Link className="p-5" href={'/discover/events'}>
                        Events
                    </Link>
                </div>
                <div 
                    className={`rotate-90 text-3xl hover:text-kuul-green ${
                        pathName === '/discover/artists' ? 'text-kuul-green' : ''
                    } max-sm:text-2xl`}
                >
                    <Link className="p-5" href={'/discover/artists'}>
                        Artists
                    </Link>
                </div>
            </div>
            {children}
        </div>
);
}