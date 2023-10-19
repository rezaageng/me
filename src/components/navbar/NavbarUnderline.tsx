import { motion } from 'framer-motion'

const NavbarUnderline = (): JSX.Element => {
  return (
    <motion.div
      style={{ originY: '0px' }}
      data-testid="navbar-underline"
      layoutId="navbar-underline"
      className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-accent-1 lg:h-[0.10rem]"
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
