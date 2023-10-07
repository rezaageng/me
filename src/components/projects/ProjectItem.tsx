'use client'

import { type Skill } from '@/@types/skills'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineLink } from 'react-icons/ai'
import { SiGithub } from 'react-icons/si'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import { transition } from '@/constants/framer-motion'
import useResponsive from '@/hooks/useResponsive'
import { useEffect, useState } from 'react'

interface Props {
  index: number
  slug: string
  title: string
  cover: string
  repository: string | null
  website: string | null
  websiteLabel: string | null
  skills: Skill[]
}

const ProjectItem = ({
  index,
  cover,
  repository,
  skills,
  slug,
  title,
  website,
  websiteLabel
}: Props): JSX.Element => {
  const [origin, setOrigin] = useState<'left' | 'right' | 'center'>('center')

  const isLg = useResponsive(1024)

  useEffect(() => {
    if (!isLg) return

    if (index % 3 === 0) setOrigin('left')
    else if (index % 3 === 1) setOrigin('center')
    else setOrigin('right')
  }, [index, isLg, origin])

  return (
    <motion.div
      data-testid="project-item"
      style={{
        transformOrigin: origin
      }}
      initial={{
        scale: 0.9,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition
      }}
      whileHover={
        isLg
          ? {
              scale: 1.15,
              zIndex: 10,
              transition: {
                ...transition,
                delay: 0.15
              }
            }
          : {}
      }
      className="group relative overflow-hidden rounded-2xl bg-primary"
    >
      <div className="absolute bottom-0 left-0 h-28 w-1/2 rounded-se-full bg-accent-3 blur-3xl" />
      <div className="absolute top-0 h-full w-full  opacity-20 [filter:url('#grainyTexture2')]" />
      <div className="relative">
        <Link data-testid="project-link" href={`/projects/${slug}`}>
          <Image
            data-testid="project-cover"
            src={cover}
            alt="cover"
            width={1280}
            height={720}
            className="image aspect-video object-cover transition delay-150 duration-100 group-hover:grayscale-0 lg:grayscale-[70%]"
          />
        </Link>
      </div>
      <div className="relative flex flex-col gap-2 px-4 py-4">
        <h2 className="line-clamp-1 font-semibold">
          <Link data-testid="project-link" href={`/projects/${slug}`}>
            {title}
          </Link>
        </h2>
        <ul className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill) => (
            <li
              data-testid="skills"
              key={uuidv4()}
              className="whitespace-nowrap rounded-full bg-accent-2/40 px-2 py-1 text-xs text-accent-1"
            >
              {skill.attributes.name}
            </li>
          ))}
          {skills.length > 3 ? (
            <li className="whitespace-nowrap rounded-full bg-accent-2/40 px-2 py-1 text-xs text-accent-1">
              +{skills.length - 3}
            </li>
          ) : null}
        </ul>
        <div className="flex gap-2 text-sm text-white/75">
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
              <span className="line-clamp-1">{websiteLabel}</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}
export default ProjectItem
