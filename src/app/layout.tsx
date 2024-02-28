import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { type Viewport, type Metadata } from 'next'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import GrainyTexture from '@/components/GrainyTexture'
import PageProgressBar from '@/components/PageProgressBar'
import QueryProvider from '@/libs/query-provider'
import LenisProvider from '@/libs/react-lenis'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

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
  metadataBase: new URL('https://rezaa.me'),
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
    card: 'summary_large_image',
    title: {
      template: '%s / rezaa',
      default: 'rezaa'
    }
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D0409',
  colorScheme: 'dark'
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}): React.ReactNode => {
  return (
    <LenisProvider root>
      <html lang="en" className={`${GeistSans.variable} ${hackNf.variable}`}>
        <head />
        {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
        <body className="overflow-x-hidden bg-primary font-sans text-white scrollbar-none">
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
