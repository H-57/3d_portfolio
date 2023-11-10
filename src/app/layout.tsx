import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tarun Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <ClerkProvider appearance={{
      elements: {
        
        footer: "hidden",
      },
    }}>

 
    <html lang="en"> 
      <body className={inter.className}>
        <Navbar/>
        <ToastContainer />
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
