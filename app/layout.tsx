import { Poppins } from '@next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

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
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
