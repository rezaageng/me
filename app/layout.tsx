import Navbar from '@/components/Navbar'
import './globals.css'

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}): React.ReactNode => {
  return (
    <html lang="en">
      <head />
      <body className="bg-primary text-white">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
