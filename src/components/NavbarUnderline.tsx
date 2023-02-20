import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const NavbarUnderline = (): JSX.Element => {
  const smallScreen = useMediaQuery({ query: '(min-width: 640px)' })

  return (
    <motion.div
      data-testid="navbar-underline"
      layoutId={smallScreen ? 'navbar-underline' : undefined}
      className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent-1 sm:h-[0.10rem]"
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        restDelta: 0.001
      }}
    />
  )
}
export default NavbarUnderline