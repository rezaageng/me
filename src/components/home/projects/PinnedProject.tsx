'use client'

import { type Project } from '@/@types/projects'
import useSmooth from '@/hooks/useSmooth'
import {
  type MotionStyle,
  type MotionValue,
  motion,
  useAnimationControls
} from 'framer-motion'
import Image from 'next/image'
import { SiGithub } from 'react-icons/si'
import { AiOutlineLink } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { useEffect, useState } from 'react'
import useResponsive from '@/hooks/useResponsive'

interface Animation extends AnimationProps {
  scrollYProgress: MotionValue<number>
}

interface Props {
  project: Project
  animation: Animation
}

const PinnedProject = ({ project, animation }: Props): JSX.Element => {
  // * vars
  const cover = project.attributes.cover.data.attributes
  const { website, repository, websiteLabel } = project.attributes

  const { scrollYProgress, start, center } = animation

  // * hooks
  const [isTitleHovered, setIsTitleHovered] = useState<boolean>(false)

  const titleArrowControl = useAnimationControls()
  const isLg = useResponsive(1024)

  // * animations
  useEffect(() => {
    if (isTitleHovered) {
      void titleArrowControl.start({
        x: 4,
        y: -4
      })
    } else {
      void titleArrowControl.start({
        x: 0,
        y: 0
      })
    }

    return () => {
      titleArrowControl.stop()
    }
  }, [isTitleHovered, titleArrowControl])

  const titleAnimation: MotionStyle = {
    x: useSmooth(scrollYProgress, [start, center], [300, 100])
  }

  return (
    <div className="flex flex-col gap-4 px-6 lg:aspect-video lg:w-[40rem] lg:flex-row lg:items-center lg:justify-between">
      <Link href={`/projects/${project.attributes.slug}`}>
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + cover.formats.medium.url}
          alt="project cover"
          width={cover.formats.medium.width}
          height={cover.formats.medium.height}
          className="aspect-[4/3] w-full rounded-3xl object-cover lg:w-96"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <motion.h2
          style={isLg ? titleAnimation : {}}
          className="text-2xl font-semibold lg:text-5xl"
        >
          <Link
            href={`/projects/${project.attributes.slug}`}
            onMouseEnter={() => {
              setIsTitleHovered(true)
            }}
            onMouseLeave={() => {
              setIsTitleHovered(false)
            }}
            className="inline-flex items-center gap-1 transition duration-300 hover:text-accent-1"
          >
            {project.attributes.name}
            <motion.div animate={titleArrowControl}>
              <PiArrowUpRightBold />
            </motion.div>
          </Link>
        </motion.h2>
        <p className="line-clamp-3 text-white/75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis
          sint consequatur maiores animi quam sapiente quidem natus tempore
          tempora.
        </p>
        <div className="flex gap-2">
          {repository !== null ? (
            <a
              href={repository}
              target="_blank"
              className="flex items-center gap-1 transition duration-300 hover:text-accent-1"
            >
              <SiGithub opacity={0.75} />
              <span>Repository</span>
            </a>
          ) : null}
          {website !== null && websiteLabel !== null ? (
            <a
              href={website}
              target="_blank"
              className="flex items-center gap-1 transition duration-300 hover:text-accent-1"
            >
              <AiOutlineLink opacity={0.75} />
              <span>{websiteLabel}</span>
            </a>
          ) : null}
        </div>
        <ul className="flex flex-wrap gap-2">
          {project.attributes.skills.data.map((skill) => (
            <li
              key={uuidv4()}
              className="rounded-full  bg-accent-2/40 px-2 py-1 text-sm text-accent-1"
            >
              {skill.attributes.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PinnedProject
