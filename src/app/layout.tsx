import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
	<ClerkProvider>
	  <html lang="en">
		<title>KUUL.club</title>
		<body className={`bg-black text-white`}>
			<Header/>
			{children}
			<Footer/>
		</body>
	  </html>
	</ClerkProvider>
  )
}
