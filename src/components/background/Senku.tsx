import Image from 'next/image'
import {
  type MotionValue,
  motion,
  type MotionStyle,
  useMotionValue
} from 'framer-motion'
import useSmooth from '@/hooks/useSmooth'
import { type MouseEventHandler, useRef } from 'react'

interface Props {
  scrollYProgress: MotionValue<number>
}

const Senku = ({ scrollYProgress }: Props): JSX.Element => {
  // * hooks
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // * handlers
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = ref.current?.getBoundingClientRect()

    if (rect === null || rect === undefined) return

    const { left, top, width, height } = rect

    const x = e.clientX - (left ?? 0)
    const y = e.clientY - (top ?? 0)

    const xPercent = x / (width ?? 1)
    const yPercent = y / (height ?? 1)

    mouseX.set(xPercent * 200 - 100)
    mouseY.set(yPercent * 200 - 100)
  }

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // * animations
  const frameAnimation: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0.1, 0.2], [0, 1]),
    y: useSmooth(scrollYProgress, [0.1, 0.2], [100, 0]),
    rotateX: useSmooth(mouseY, [-100, 100], [-16, 16]),
    rotateY: useSmooth(mouseX, [-100, 100], [16, -16])
  }

  const bodyAnimation: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0.3, 0.5], [0, 1])
  }

  const handAnimation: MotionStyle = {
    y: useSmooth(scrollYProgress, [0.4, 0.8], [300, 0]),
    x: useSmooth(scrollYProgress, [0.4, 0.8], [50, 0]),
    rotateZ: useSmooth(scrollYProgress, [0.4, 0.8], [45, 0])
  }

  return (
    <div
      ref={ref}
      style={{ perspective: '40rem' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={frameAnimation}
        className="aspect-square w-96 rounded-xl border-2 border-black bg-[#848484] p-4"
      >
        <div className="relative h-full w-full overflow-clip rounded-md border-2 border-black bg-primary">
          <motion.div style={bodyAnimation} className="absolute">
            <Image
              src="/assets/images/senku/body.png"
              alt="senku body"
              width={512}
              height={512}
            />
            <motion.div style={handAnimation} className="absolute bottom-0">
              <Image
                src="/assets/images/senku/hand.png"
                alt="senku hand"
                width={512}
                height={512}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Senku
