'use client'

import SvgGradientMotion from '@/components/SvgGradientMotion'
import {
  GoRepo,
  GoStar,
  GoGitCommit,
  GoGitPullRequest,
  GoIssueOpened,
  GoGitMerge
} from 'react-icons/go'
import { SiGithub } from 'react-icons/si'
import {
  type MotionStyle,
  motion,
  useScroll,
  useAnimate,
  useInView,
  stagger
} from 'framer-motion'
import { useEffect, useRef } from 'react'
import useSmooth from '@/hooks/useSmooth'

interface Props {
  className?: string
  data: GitHubStats
}

const HomeGithubStats = ({ className = '', data }: Props): JSX.Element => {
  // * hooks
  const ref = useRef<HTMLDivElement>(null)

  const [scope, animate] = useAnimate()

  const isInview = useInView(scope, { margin: '-100px', once: true })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })

  // * animations
  const wrapperScroll: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0.2, 1], [0, 1])
  }

  const logoScroll: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0.2, 0.7], [0, 1]),
    x: useSmooth(scrollYProgress, [0.2, 0.7], [-100, 0])
  }

  useEffect(() => {
    if (isInview) {
      void animate(
        'li',
        {
          opacity: [0, 1],
          scale: [0.3, 1]
        },
        {
          type: 'spring',
          stiffness: 300,
          damping: 30,
          restDelta: 0.001,
          delay: stagger(0.1, { startDelay: 0.15 })
        }
      )
    } else {
      void animate('li', {
        opacity: 0,
        scale: 0.3
      })
    }
  }, [animate, isInview])

  // * vars
  const { user } = data

  const stargazers = user.repositories.nodes
    .filter((repo) => repo.stargazers.totalCount !== 0)
    .reduce((prev, curr) => prev + curr.stargazers.totalCount, 0)

  const currentYear = new Date().getFullYear()

  return (
    <motion.div
      ref={ref}
      style={wrapperScroll}
      data-testid="bento-github"
      className={`${className} relative w-full overflow-hidden rounded-3xl`}
    >
      <div className="absolute h-full w-full rounded-3xl border border-white bg-primary bg-opacity-50 p-8 backdrop-blur-lg backdrop-filter" />
      <div className="relative flex h-full flex-col justify-between gap-2 px-8 py-8 md:py-10">
        <div className=" flex items-center">
          <h2 className="flex-1 bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text text-4xl font-semibold text-transparent  sm:text-3xl md:text-4xl">
            GitHub Stats
          </h2>
          <motion.div style={logoScroll} className="flex flex-1 justify-end">
            <SvgGradientMotion id="gh-gradient" from="#259D97" to="#1A6A87" />
            <SiGithub className="h-16 w-16 fill-[url(#gh-gradient)]" />
          </motion.div>
        </div>
        <ul ref={scope} className="">
          <li className="flex items-center gap-2">
            <GoRepo />
            <span data-testid="public-repos">
              {user.repositories.totalCount} Public Repositories
            </span>
          </li>
          <li className="flex items-center gap-2">
            <GoStar />
            <span data-testid="stars">
              {stargazers}
              &nbsp;Stars Earned
            </span>
          </li>
          <li className="flex items-center gap-2">
            <GoGitCommit />
            <span data-testid="commits">
              {user.contributionsCollection.totalCommitContributions}&nbsp;
              Commits ({currentYear})
            </span>
          </li>
          <li className="flex items-center gap-2">
            <GoGitPullRequest />
            <span data-testid="pull-requests">
              {user.pullRequests.totalCount} Pull Requests
            </span>
          </li>
          <li className="flex items-center gap-2">
            <GoIssueOpened />
            <span data-testid="issues">
              {user.openIssues.totalCount + user.closedIssues.totalCount}
              &nbsp;Issues
            </span>
          </li>
          <li className="flex items-center gap-2">
            <GoGitMerge />
            <span data-testid="contributions">
              {user.repositoriesContributedTo.totalCount} Contributed to
            </span>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default HomeGithubStats
