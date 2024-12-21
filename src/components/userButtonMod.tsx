import UserButtonSVG from '@/components/userButtonSVG';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function UserButtonMod() {
    return <div>
        <SignedIn>
            <div className='p-2 flex items-center'>
                <UserButton 
                    appearance={{
                        elements:{
                            userButtonBox: "w-14 h-14",
                            userButtonAvatarBox: "w-14 h-14"      
                        }
                    }}
                />
            </div>
        </SignedIn>
        <SignedOut>
            <SignInButton>
                <button>
                    <UserButtonSVG/>
                </button>
            </SignInButton>
        </SignedOut>
    </div>
}