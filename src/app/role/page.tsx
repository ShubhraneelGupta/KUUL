import Image from "next/image"

export default function Page(){
    const classes = "cursor-pointer m-4 border-kuul-green border-2 rounded-xl hover:border-dashed text-2xl p-4"
    return <div className="h-screen w-screen flex flex-col items-center justify-center">
                <div className="align-left w-1/5 max-sm:w-2/3">
                    <div className="m-4 text-3xl">Join as...</div>
                    <div className={classes}>Artist</div>
                    <div className={classes}>
                        Venue Owner/ Event Organisor</div>
                    <div className={classes}>User</div>
                </div>
            </div>
}