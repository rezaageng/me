import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import { type Metadata } from 'next'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'rezaa',
  description: 'hii, i&apos;m rezaa, nice to meet u',
  viewport: 'width=device-width, initial-scale=1'
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}): React.ReactNode => {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.variable} bg-primary font-sans text-white`}>
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
