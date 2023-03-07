import { type Smooth } from '@/@types'
import { useSpring, useTransform } from 'framer-motion'

const useSmooth: Smooth = (value, input, output) => {
  const transform = useTransform(value, input, output)

  return useSpring(transform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
}

export default useSmooth
