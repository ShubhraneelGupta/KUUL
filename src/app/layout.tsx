'use client'

import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

import {useState} from 'react'
import localFont from "next/font/local";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  const handleLinkClick = () => {
    setSidebar(!sidebar)
  }

  const buttons = ['Home', 'Events', 'Business', 'About Us', 'Sign Up']

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black text-white">
          <Header buttons={buttons} handleSidebar={handleSidebar} sidebarState={sidebar}/>
          {children}
          <div>
            {sidebar && <Sidebar buttons={buttons} handleLinkClick={handleLinkClick} sidebarState={sidebar}/>}
          </div>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}