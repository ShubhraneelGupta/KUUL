'use client'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

import {useState, useEffect, useRef} from 'react'
import localFont from "next/font/local";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebar, setSidebar] = useState(false)
  const sideBarRef = useRef<HTMLDivElement>(null) 

  const handleClickOutsideSidebar = (event: MouseEvent) => {
    if (
      sidebar && 
      sideBarRef.current && 
      !sideBarRef.current.contains(event.target as Node) 
    ) {
      setSidebar(false) 
    }
  }

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  const handleLinkClick = () => {
    setSidebar(false) 
  }

  const buttons = ['Home', 'Events', 'Business', 'About Us', 'Sign Up']

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideSidebar)
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSidebar)
    }
  }, [sidebar])

  return (
    <ClerkProvider>
      <html lang="en">
        <title>KUUL.club</title>
        <body className="bg-black text-white">
          <Header buttons={buttons} handleSidebar={handleSidebar} sidebarState={sidebar}/>
          {children}

          <div ref={sideBarRef} className="absolute top-0 left-0">
            {sidebar && <Sidebar buttons={buttons} handleLinkClick={handleLinkClick} sidebarState={sidebar}/>}
          </div>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}
