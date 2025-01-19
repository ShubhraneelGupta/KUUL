import UserButtonSVG from '@/components/userButtonSVG';
import { SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import Link from 'next/link';

  

export default function UserButtonMod() {
    return <div>
        <SignedIn>
            <div className='p-2 flex items-center'>
                <UserButton 
                    appearance={{
                        elements:{
                            userButtonBox: "w-8 h-8",
                            userButtonAvatarBox: "w-8 h-8"      
                        }
                    }}
                />
            </div>
        </SignedIn>
        <SignedOut>
                <Link href={'/sign-in'}>
                    <UserButtonSVG/>
                </Link>
        </SignedOut>
        

    </div>
}