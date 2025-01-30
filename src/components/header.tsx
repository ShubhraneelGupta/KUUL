'use client'
import Logo from '@/components/Logo/Logo';
import React from 'react';
import UserButtonMod from '@/components/userButtonMod';
import {motion} from 'motion/react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();
  const discoverPattern = /^\/discover/;
  return (
	<motion.div 
	initial={{
	  y:-100
	}}
	animate={{
	  y:0
	}}
	transition={{
	  delay: 1.25
	}}
	className="z-10 fixed top-0 flex justify-center w-screen backdrop-blur">
	  <div className="flex w-full justify-between items-center pr-16 pl-16 max-sm:p-4 m-2 max-sm:m-0">
		<Logo />
		<div className='flex items-center justify-center'>
			<Link href={'/discover/events'}>
				<div className={`p-2 m-2 border-2 rounded-xl hover:border-dashed border-kuul-green ${discoverPattern.test(pathName) ? 'border-dashed' : ''}`}>
					Discover
				</div>
			</Link>
			<Link href={'/business'}>
				<div className={`p-2 m-2 border-2 rounded-xl hover:border-dashed border-kuul-green ${pathName == '/business' ? 'border-dashed' : ''}`}>
					List your event
				</div>
			</Link>
			<div className='ml-2'>
				<UserButtonMod />
			</div>
		</div>
	  </div>
	</motion.div>
  );
}
