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

  const { scrollYProgress, start, end } = animation

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

  const imageAnimation: MotionStyle = {
    x: useSmooth(scrollYProgress, [start, end], [0, 10])
  }

  const subtitleAnimation: MotionStyle = {
    x: useSmooth(scrollYProgress, [start, end], [150, -150])
  }

  const titleAnimation: MotionStyle = {
    x: useSmooth(scrollYProgress, [start, end], [100, -100])
  }

  const langsAnimation: MotionStyle = {
    x: useSmooth(scrollYProgress, [start, end], [200, -200])
  }

  return (
    <div
      data-testid="pinned-project"
      className="flex flex-col gap-6 lg:aspect-video lg:w-[80rem] lg:flex-row lg:items-center lg:justify-between"
    >
      <motion.div style={isLg ? imageAnimation : {}} className="flex-1">
        <Link
          data-testid="project-link"
          href={`/projects/${project.attributes.slug}`}
        >
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + cover.formats.large.url}
            alt="project cover"
            width={cover.formats.large.width}
            height={cover.formats.large.height}
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </Link>
      </motion.div>
      <div className="flex flex-1 flex-col gap-4 mix-blend-difference lg:h-full lg:w-full lg:justify-center">
        <motion.h2
          data-testid="project-title"
          style={isLg ? titleAnimation : {}}
          className="mb-auto text-2xl font-semibold lg:mb-4 lg:text-6xl"
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
        <motion.p
          data-testid="project-description"
          style={isLg ? subtitleAnimation : {}}
          className="line-clamp-3 text-white/75 lg:text-xl"
        >
          {project.attributes.description}
        </motion.p>
        <motion.div
          style={isLg ? subtitleAnimation : {}}
          className="flex gap-2"
        >
          {repository !== null ? (
            <a
              data-testid="repository-url"
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
              data-testid="website-url"
              href={website}
              target="_blank"
              className="flex items-center gap-1 transition duration-300 hover:text-accent-1"
            >
              <AiOutlineLink opacity={0.75} />
              <span>{websiteLabel}</span>
            </a>
          ) : null}
        </motion.div>
        <motion.ul
          data-testid="skills"
          style={isLg ? langsAnimation : {}}
          className="flex flex-wrap gap-2"
        >
          {project.attributes.skills.data.map((skill) => (
            <li
              key={uuidv4()}
              className="rounded-full  bg-accent-2/40 px-2 py-1 text-sm text-accent-1"
            >
              {skill.attributes.name}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

export default PinnedProject
