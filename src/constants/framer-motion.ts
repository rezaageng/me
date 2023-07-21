import { type Transition } from 'framer-motion'

export const transition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 50,
  restDelta: 0.001
}
