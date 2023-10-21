import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { type Metadata } from 'next'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import GrainyTexture from '@/components/GrainyTexture'
import PageProgressBar from '@/components/PageProgressBar'
import QueryProvider from '@/libs/query-provider'
import LenisProvider from '@/libs/react-lenis'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const hackNf = localFont({
  src: '../../public/assets/fonts/HackNerdFont-Regular.ttf',
  fallback: ['monospace'],
  variable: '--font-hacknf'
})

export const metadata: Metadata = {
  title: {
    template: '%s / rezaa',
    default: 'rezaa'
  },
  description: 'hii, i&apos;m rezaa',
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://rezaa.me'),
  colorScheme: 'dark',
  creator: 'Reza Ageng Trihandoko',
  publisher: 'Reza Ageng Trihandoko',
  openGraph: {
    type: 'website',
    title: {
      template: '%s / rezaa',
      default: 'rezaa'
    }
  },
  twitter: {
    title: {
      template: '%s / rezaa',
      default: 'rezaa'
    }
  }
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}): React.ReactNode => {
  return (
    <LenisProvider root>
      <html lang="en" className={`${poppins.variable} ${hackNf.variable}`}>
        <head />
        <body className="bg-primary font-sans text-white scrollbar-none">
          <PageProgressBar />
          <QueryProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <header>
              <Navbar />
            </header>
            <main className="m-auto mt-16 max-w-5xl lg:mt-24">{children}</main>
            <Footer />
          </QueryProvider>
          <GrainyTexture />
        </body>
      </html>
    </LenisProvider>
  )
}

export default RootLayout
