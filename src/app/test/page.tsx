'use client'

import { usePathname } from "next/navigation";

export default function Page(){
    const path = usePathname();

    return <div className="h-screen w-screen flex items-center justify-center text-3xl">
        {path}
    </div>
}