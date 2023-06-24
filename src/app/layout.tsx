import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from '@/components/Navbar'
import './globals.css'
import { type Metadata } from 'next'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const hackNf = localFont({
  src: '../../public/assets/fonts/HackNerdFont-Regular.ttf',
  fallback: ['monospace'],
  variable: '--font-hacknf'
})

export const metadata: Metadata = {
  title: 'rezaa',
  description: 'hii, i&apos;m rezaa, nice to meet u',
  viewport: 'width=device-width, initial-scale=1',
  icons: '/favicon.ico'
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}): React.ReactNode => {
  return (
    <html lang="en" className={`${poppins.variable} ${hackNf.variable}`}>
      <head />
      <body className="bg-primary font-sans text-white scrollbar-thin scrollbar-track-secondary-900 scrollbar-thumb-accent-1 scrollbar-thumb-rounded">
        <header>
          <Navbar />
        </header>
        <main className="m-auto mt-16 max-w-7xl">{children}</main>
        <aside>
          <Sidebar />
        </aside>
      </body>
    </html>
  )
}

export default RootLayout