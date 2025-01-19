export default function Footer(){
    const footerHeight = 'h-32'
    return (
        <div className={`relative ${footerHeight}`}>
            <div className={`flex items-center justify-center absolute bottom-0 ${footerHeight} w-full bg-zinc-800 text-7xl`}>
                footer
            </div>
        </div>
    )
}