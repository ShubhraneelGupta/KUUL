'use client'
import Logo from '@/components/Logo/Logo';
import React from 'react';
import UserButtonMod from '@/components/userButtonMod';
import {motion} from 'motion/react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();
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
	  <div className="flex w-full justify-between items-center pr-24 pl-24 max-sm:p-4 m-2 max-sm:m-0">
		<Logo />
		<div className='flex items-center justify-center'>
			<div className='p-2 m-2 border-2 rounded-xl hover:border-dashed border-kuul-green'>
				<Link href={'/search'}>Discover</Link>
			</div>
			<div className={`p-2 m-2 border-2 rounded-xl hover:border-dashed border-kuul-green`}>
				<Link href={'/business'}>List your Event</Link>
			</div>
			<div className='ml-2'>
				<UserButtonMod />
			</div>
		</div>
	  </div>
	</motion.div>
  );
}
