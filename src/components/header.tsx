import Logo from '@/components/Logo/Logo';
import Hamburger from '@/components/hamburger';
import React from 'react';
import Cross from './cross';
import UserButtonMod from '@/components/userButtonMod';

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
            <UserButtonMod />
            <div>
              {!sidebarState ? <Hamburger handleSidebar={handleSidebar}/> : <Cross handleSidebar={handleSidebar}/>}
            </div>
        </div>
      </div>
    </div>
  );
}
