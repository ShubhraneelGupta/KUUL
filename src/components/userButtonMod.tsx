import UserButtonSVG from '@/components/userButtonSVG';
import MenuButton from '@/components/menuButton';
import { SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UserButtonMod() {
    const pathName = usePathname();
    return <div>
        <SignedIn>
            <div className={`p-1 flex items-center border-2 rounded-full hover:border-dashed border-kuul-green ${pathName == '/profile' ? 'border-dashed' : ''}`}>
                <UserButton 
                    appearance={{
                        elements:{
                            userButtonBox: "w-8 h-8",
                            userButtonAvatarBox: "w-8 h-8"      
                        }
                    }}
                />
                <div className='flex flex-col items-center justify-center pl-2'>
                    <Link href={'/profile'}><MenuButton/></Link>
                </div>
            </div>
        </SignedIn>
        <SignedOut>
            <div className={`p-1 flex items-center border-2 rounded-full hover:border-dashed border-kuul-green ${pathName == '/profile' ? 'border-dashed' : ''}`}>
                <Link href={'/sign-in'}>
                    <UserButtonSVG/>
                </Link>
                <div className='flex flex-col items-center justify-center pl-2'>
                    <Link href={'/profile'}><MenuButton/></Link>
                </div>
            </div>
        </SignedOut>
        

    </div>
}