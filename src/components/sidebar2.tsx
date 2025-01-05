import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import Link from 'next/link';
interface Sidebar2Props {
    buttons: ReadonlyArray<string>;
    handleLinkClick: () => void;
    sidebarState: boolean;
}

const sidebarTransitionEntry = {
    duration: 1,
    type: "spring",
    bounce: 0.2
};

const sidebarTransitionExit = {
    delay: 0.75,
    duration: 1,
    type: "spring",
    bounce: 0.2
};

export default function Sidebar2({ buttons, handleLinkClick, sidebarState }: Sidebar2Props) {
    const MotionLink = motion(Link);
    return (
        <AnimatePresence> 
            {sidebarState && ( 
                <motion.div
                    initial={{ x: 2000 }}
                    animate={{ x: 0, transition: sidebarTransitionEntry }}
                    exit={{ x: 2000, transition: sidebarTransitionExit }} 
                    className="
                        flex flex-col justify-center
                        w-1/2 h-screen fixed top-0
                        right-0 text-white bg-zinc-900 text-7xl
                        backdrop-blur bg-opacity-50
                        max-sm:w-screen
                        max-sm:text-5xl
                    "
                >
                    {buttons.map((button, key) => (
                        <MotionLink
                            key={key}
                            onClick={handleLinkClick}
                            href={button === 'Home' ? '/' : `${button.toLowerCase().split(' ').join('')}`}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.1 * key + 0.5 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { delay: 0.1 * key },
                            }}
                            className="w-full block p-6 hover:bg-[#9acd32] hover:text-black"
                        >
                            {button}
                        </MotionLink>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
