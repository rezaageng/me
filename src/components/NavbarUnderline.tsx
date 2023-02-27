import { useResponsive } from '@/hooks/useResponsive'
import { motion } from 'framer-motion'

const NavbarUnderline = (): JSX.Element => {
  const { isLg } = useResponsive()

  return (
    <motion.div
      data-testid="navbar-underline"
      layoutId={isLg ? 'navbar-underline' : undefined}
      className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent-1 lg:h-[0.10rem]"
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
