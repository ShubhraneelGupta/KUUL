import UserButtonSVG from '@/components/userButtonSVG';
import MenuButton from '@/components/menuButton';
import { SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import Link from 'next/link';
  

export default function UserButtonMod() {
    return <div>
        <SignedIn>
            <div className='p-1 flex items-center border-2 rounded-full'>
                <UserButton 
                    appearance={{
                        elements:{
                            userButtonBox: "w-8 h-8",
                            userButtonAvatarBox: "w-8 h-8"      
                        }
                    }}
                />
                <div className='flex flex-col items-center justify-center pl-2'>
                    <MenuButton/>
                </div>
            </div>
        </SignedIn>
        <SignedOut>
                <Link href={'/sign-in'}>
                    <UserButtonSVG/>
                </Link>
        </SignedOut>
        

    </div>
}