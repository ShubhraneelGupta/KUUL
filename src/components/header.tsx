import Logo from '@/components/Logo/Logo'
import Link from 'next/link'

export default function Header({buttons}){
    return (
        <div className='fixed top-0 w-screen'>
            <div className="flex justify-between align-middle p-3 bg-black opacity-[0.8]">
            <Logo/>
                <div className='flex'>
                    {buttons.map((button: string, key: Number) => {
                        return <Link href={`#${button}`} className='p-4'>{button}</Link>
                    })}
                </div>
            </div>
        </div>
    )
}