'use client'
export default function Test() {
    return <div className="flex items-center justify-center h-screen w-screen">
        <button className="cursor-pointer "
        onClick={async () => {
            const res = await fetch('/api/events')
            const data = res.json
            console.log(data);
        }}>Click me</button>
    </div>
}