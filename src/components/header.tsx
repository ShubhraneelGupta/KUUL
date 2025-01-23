'use client'
import Logo from '@/components/Logo/Logo';
import React from 'react';
import UserButtonMod from '@/components/userButtonMod';
import {motion} from 'motion/react'
import Link from 'next/link';

export default function Header() {
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
	className="z-10 fixed top-0 w-screen backdrop-blur">
	  <div className="flex justify-between items-center p-3">
		<Logo />
		<div className='flex items-center justify-center'>
			<div className='p-3'>
				<Link href={'/buisness'}>List your Event</Link>
			</div>
			<UserButtonMod />
		</div>
	  </div>
	</motion.div>
  );
}
