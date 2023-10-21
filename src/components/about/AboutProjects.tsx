'use client'

import { type ProjectsResponse } from '@/@types/projects'
import Link from 'next/link'
import { AiOutlineLink } from 'react-icons/ai'
import { PiArrowRight } from 'react-icons/pi'
import { SiGithub } from 'react-icons/si'
import { v4 as uuidv4 } from 'uuid'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import { transition } from '@/constants/framer-motion'

interface Props {
  data: ProjectsResponse['data']
}

const AboutProjects = ({ data }: Props): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const arrowControl = useAnimationControls()

  // * animations
  useEffect(() => {
    if (isHover) {
      void arrowControl.start({
        x: 4
      })
    } else {
      void arrowControl.start({
        x: 0
      })
    }

    return () => {
      arrowControl.stop()
    }
  }, [arrowControl, isHover])

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{ ...transition, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-300">Projects</h2>
      <ul className="flex flex-col gap-2">
        {data.map((project) => (
          <li key={project.id}>
            <h3 className="text-lg font-semibold text-accent-1">
              <Link
                href={`/projects/${project.attributes.slug}`}
                className="hover:animate-pulse"
              >
                {project.attributes.name}
              </Link>
            </h3>
            <p>{project.attributes.shortDescription}</p>
            <div className="flex flex-col gap-2">
              <ul className="flex flex-wrap gap-2">
                {project.attributes.skills.data.slice(0, 3).map((skill) => (
                  <li
                    data-testid="skills"
                    key={uuidv4()}
                    className="whitespace-nowrap rounded-full bg-accent-2/40 px-2 py-1 text-xs text-accent-1"
                  >
                    {skill.attributes.name}
                  </li>
                ))}
                {project.attributes.skills.data.length > 3 ? (
                  <li className="whitespace-nowrap rounded-full bg-accent-2/40 px-2 py-1 text-xs text-accent-1">
                    +{project.attributes.skills.data.length - 3}
                  </li>
                ) : null}
              </ul>
              <div className="flex gap-2 text-sm text-gray-300/75">
                {project.attributes.repository !== null ? (
                  <a
                    data-testid="repository-url"
                    href={project.attributes.repository}
                    target="_blank"
                    className="flex items-center gap-1 transition duration-300 hover:text-accent-1"
                  >
                    <SiGithub opacity={0.75} />
                    <span>Repository</span>
                  </a>
                ) : null}
                {project.attributes.website !== null &&
                project.attributes.websiteLabel !== null ? (
                  <a
                    data-testid="website-url"
                    href={project.attributes.website}
                    target="_blank"
                    className="flex items-center gap-1 transition duration-300 hover:text-accent-1"
                  >
                    <AiOutlineLink opacity={0.75} />
                    <span className="line-clamp-1">
                      {project.attributes.websiteLabel}
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div
        onMouseEnter={() => {
          setIsHover(true)
        }}
        onMouseLeave={() => {
          setIsHover(false)
        }}
        className="mt-2 inline-flex items-center gap-2 text-accent-1 hover:animate-pulse"
      >
        <Link href="/projects">See other projects</Link>
        <motion.div animate={arrowControl}>
          <PiArrowRight />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutProjects
