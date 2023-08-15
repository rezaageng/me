'use client'

import { v4 as uuidv4 } from 'uuid'
import { type MotionStyle, motion, useScroll } from 'framer-motion'
import { transition } from '@/constants/framer-motion'
import { useRef } from 'react'
import useSmooth from '@/hooks/useSmooth'

interface Props {
  className?: string
  data: SolvedProblems
}

const HomeLeet = ({ className = '', data }: Props): JSX.Element => {
  // * data
  const allProblems = data.allQuestionsCount.filter(
    (val) => val.difficulty !== 'All'
  )

  const solvedProblems =
    data.matchedUser.submitStatsGlobal.acSubmissionNum.filter(
      (val) => val.difficulty !== 'All'
    )

  const solvedBeats = data.matchedUser.problemsSolvedBeatsStats.filter(
    (val) => val.difficulty !== 'All'
  )

  const progress = solvedProblems.map((val, i) => ({
    background:
      val.difficulty === 'Easy'
        ? 'bg-teal-900'
        : val.difficulty === 'Medium'
        ? 'bg-yellow-900'
        : 'bg-rose-900',
    foreground:
      val.difficulty === 'Easy'
        ? 'bg-teal-500'
        : val.difficulty === 'Medium'
        ? 'bg-yellow-500'
        : 'bg-rose-500',
    percentage: (val.count / allProblems[i].count) * 100
  }))

  const submissions = Object.values(
    JSON.parse(data.matchedUser.userCalendar.submissionCalendar) as Record<
      string,
      number
    >
  ).reduce((prev, curr) => prev + curr, 0)

  // * hooks
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })

  // * animations
  const wrapperScroll: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0.2, 1], [0, 1])
  }

  return (
    <motion.div
      ref={ref}
      style={wrapperScroll}
      data-testid="bento-leet"
      className={`${className} relative w-full overflow-hidden rounded-3xl`}
    >
      <div className="absolute h-full w-full rounded-3xl border border-white bg-primary bg-opacity-50 p-8 backdrop-blur-lg backdrop-filter" />
      <div className="relative flex h-full flex-col justify-between gap-2 px-8 py-8 md:py-10">
        <h2 className="bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text text-4xl font-semibold text-transparent sm:text-3xl md:text-4xl">
          LeetCode
        </h2>
        <div data-testid="leet-rank" className="flex text-lg">
          <span className="text-white/75">Rank&nbsp;</span>
          <span className="font-semibold">
            {data.matchedUser.profile.ranking.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between sm:flex-col md:flex-row">
          <div data-testid="leet-submissions-last">
            <span className="font-semibold">{submissions}</span>
            <span className="text-white/75">
              &nbsp;Submissions ({new Date().getFullYear()})
            </span>
          </div>
          <div data-testid="leet-solved">
            <span className="font-semibold">
              {data.matchedUser.submitStatsGlobal.acSubmissionNum[0].count}
            </span>
            <span className="text-white/75">&nbsp;Solved</span>
          </div>
        </div>
        {solvedProblems.map((problem, i) => (
          <div key={uuidv4()}>
            <div className="flex items-baseline sm:justify-between lg:justify-normal">
              <span className="w-16 text-sm text-white/75">
                {problem.difficulty}
              </span>
              <div
                data-testid="leet-problem-solved"
                className="flex flex-1 items-baseline gap-1 sm:flex-none lg:flex-1"
              >
                <span className="font-semibold">{problem.count}</span>
                <span>/</span>
                <span className="text-sm text-white/75">
                  {allProblems[i].count}
                </span>
              </div>
              <div
                data-testid="leet-problem-beats"
                className="block sm:hidden lg:block"
              >
                {solvedBeats[i].percentage !== null ? (
                  <>
                    <span className="text-sm text-white/75">Beats&nbsp;</span>
                    <span className="font-semibold">
                      {solvedBeats[i].percentage?.toFixed(2)}%
                    </span>
                  </>
                ) : (
                  <span className="text-sm text-white/75">Not enough data</span>
                )}
              </div>
            </div>
            <div
              className={`h-2 w-full overflow-hidden rounded-full ${progress[i].background}`}
            >
              <motion.div
                initial={{ width: 0 }}
                viewport={{ once: true }}
                whileInView={{ width: `${progress[i].percentage}%` }}
                transition={transition}
                className={`h-full ${progress[i].foreground}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
export default HomeLeet
