import Link from 'next/link'
import {motion} from 'motion/react'

interface SidebarProps {
    buttons: ReadonlyArray<string>;
    handleLinkClick: () => void;
    sidebarState: boolean
}

export default function Sidebar({buttons, handleLinkClick, sidebarState}: SidebarProps) {
    return (
        <motion.div 
        initial={sidebarState ? {
            x:1000,
            opacity: 0
        } 
        : ''}

        animate={sidebarState ? {
            x:0,
            opacity: 0.9,
            transition: {
                type: 'spring',
                bounce: 0.2,
            }
        } 
            : ''}
        className="
        flex flex-col justify-center 
        w-[50vw] h-screen fixed top-0 
        right-0 text-white bg-black
        text-7xl">
              {buttons.map((button, key) => (
                <Link 
                onClick={handleLinkClick}
                href={button === 'Home' ? '/' : `${button.toLowerCase().split(' ').join('')}`} key={key} 
                className="w-full p-6 hover:bg-[#9acd32] hover:text-black">
                {button}
                </Link>
          ))}
        </motion.div>
    )
}