import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
} from '@clerk/nextjs'

import Logo from '../Logo/Logo'

export default function Header() {
    return <div className="w-screen bg-zinc-800 text-white p-3 flex items-center justify-between
                            fixed top-0">
        <Logo/>
        <SignedOut>
            <SignInButton>
                <button className='bg-zinc-950 p-3 text-white rounded-xl'>Sign In</button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>
}