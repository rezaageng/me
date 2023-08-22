'use client'

import { Float, TrackballControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HomeSkillsCloud from './HomeSkillsCloud'
import { ResizeObserver } from '@juggle/resize-observer'
import { useLayoutEffect, useRef, useState } from 'react'
import { TbCube, TbCubeOff } from 'react-icons/tb'
import {
  AnimatePresence,
  type AnimationProps,
  motion,
  useScroll,
  type MotionStyle,
  useTransform
} from 'framer-motion'
import { type SkillCategoriesResponse } from '@/@types/skills'
import { v4 as uuidv4 } from 'uuid'
import useSmooth from '@/hooks/useSmooth'
import BentoWrapper from './BentoWrapper'

interface Props {
  data: SkillCategoriesResponse['data']
  className?: string
}

const HomeSkills = ({ data, className = '' }: Props): JSX.Element => {
  const [is3D, setIs3D] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    setIs3D(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })

  const initial: AnimationProps['initial'] = { opacity: 0 }
  const animate: AnimationProps['animate'] = {
    opacity: 1,
    transition: {
      ease: 'easeInOut'
    }
  }
  const exit: AnimationProps['exit'] = {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.2
    }
  }

  const wrapperScroll: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0, 0.5], [0, 1])
  }

  const titleScroll: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0.2, 0.5], [0, 1])
  }

  const listScroll: MotionStyle = {
    opacity: useTransform(scrollYProgress, [0.6, 1], [0, 1])
  }

  return (
    <motion.div
      style={wrapperScroll}
      ref={ref}
      data-testid="bento-skills"
      className={`${className} relative h-full w-full overflow-hidden rounded-3xl `}
    >
      <BentoWrapper className="flex flex-col items-center">
        <motion.div
          style={titleScroll}
          className="z-10 flex w-full justify-between "
        >
          <h2
            data-testid="skills-title"
            className="bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text text-4xl font-semibold text-transparent  sm:text-3xl md:text-4xl"
          >
            Skills
          </h2>
          <div>
            <motion.button
              onClick={() => {
                setIs3D((prev) => !prev)
              }}
              whileTap={{ scale: 0.7 }}
              className="aspect-square rounded border border-white border-opacity-20 p-2"
            >
              {is3D ? <TbCubeOff /> : <TbCube />}
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          {is3D ? (
            <motion.div
              key="cloudSkills"
              initial={initial}
              animate={animate}
              exit={exit}
              className="mt-2 h-full w-full -translate-x-4 -translate-y-4 sm:flex-1"
            >
              <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0, 35], fov: 90 }}
                resize={{ polyfill: ResizeObserver }}
                data-testid="3d-canvas"
              >
                <fog attach="fog" args={['#0D0409', 0, 80]} />
                <Float>
                  <HomeSkillsCloud />
                </Float>
                <TrackballControls rotateSpeed={5} noPan noZoom />
              </Canvas>
            </motion.div>
          ) : (
            <motion.div
              data-testid="skills-list"
              key="skills-list"
              style={listScroll}
              initial={initial}
              animate={animate}
              exit={exit}
              className="z-10 mt-2 w-full overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary-400"
            >
              <ul className="flex flex-col gap-2">
                {data.map((skillCategory) => (
                  <li key={uuidv4()}>
                    <h2
                      data-testid="skill-categories"
                      className="text-lg font-bold leading-10"
                    >
                      {skillCategory.attributes.category}
                    </h2>
                    <ul>
                      {skillCategory.attributes.skills.data.map((skill) => (
                        <li
                          data-testid="skills"
                          className="border-t border-white border-opacity-20 leading-10 text-white/75"
                          key={uuidv4()}
                        >
                          {skill.attributes.name}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        {/* </div> */}
      </BentoWrapper>
    </motion.div>
  )
}

export default HomeSkills
