'use client'

import { redirect } from "next/navigation";
import { useState } from "react"

export default function Page(){
    const [loading, setLoading] = useState(false);

    const handleSelectRole = async (role : string) => {
        try{
            setLoading(true)
            const response = await fetch('/api/select-role', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: role
            })
        }catch(err){
            alert(err);
        }
        finally{
            redirect('/')
        }
    }

    const classes = "w-full align-left mb-4 border-kuul-green border-2 rounded-xl focus:bg-kuul-green focus:text-black hover:border-dashed text-2xl p-4"
    return <div className="h-screen w-screen flex flex-col items-center justify-center">
                <div className="relative align-left w-1/5 max-sm:w-2/3">
                    <div className="m-4 text-3xl">Join as...</div>
                    <button className={classes}>Artist</button>
                    <button className={classes}>
                        Venue Owner/ Event Organisor</button>
                    <button className={classes}>User</button>
                    <div 
                    onClick={() => handleSelectRole("artist")}
                    className="border-white border-2 absolute right-0 p-2 hover:bg-white hover:text-black cursor-pointer rounded-xl pr-5 pl-5">{loading ? 'saving...' : 'Next'}</div>
                </div>
            </div>
}