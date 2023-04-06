import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <header
        className={`${poppins.variable} bg-primary font-sans text-lg text-white`}
      >
        <Navbar />
      </header>
      <main
        className={`${poppins.variable} text-bases m-auto mt-16 max-w-7xl bg-primary font-sans text-white sm:text-lg`}
      >
        {children}
      </main>
      <aside
        className={`${poppins.variable} bg-primary font-sans text-lg text-white`}
      >
        <Sidebar />
      </aside>
    </>
  )
}
export default Layout
