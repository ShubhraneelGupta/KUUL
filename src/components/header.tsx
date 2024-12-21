import Logo from '@/components/Logo/Logo';
import Link from 'next/link';
import Hamburger from '@/components/hamburger';
import React from 'react';
import Cross from './cross';
import UserButtonSVG from '@/components/userButtonSVG';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

interface HeaderProps {
  buttons: ReadonlyArray<string>;
  handleSidebar: () => void; 
  sidebarState: boolean
}

export default function Header({ buttons, handleSidebar, sidebarState }: HeaderProps) {
  return (
    <div className="z-10 fixed top-0 w-screen p-6">
      <div className="flex justify-between align-middle p-3">
        <Logo />
        <div className='flex items-center justify-center'>
            <div>
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
            <div>
              {!sidebarState ? <Hamburger handleSidebar={handleSidebar}/> : <Cross handleSidebar={handleSidebar}/>}
            </div>
        </div>
      </div>
    </div>
  );
}
