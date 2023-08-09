import SvgGradientMotion from '@/components/SvgGradientMotion'
import {
  GoRepo,
  GoStar,
  GoGitCommit,
  GoGitPullRequest,
  GoIssueOpened
} from 'react-icons/go'

import { SiGithub } from 'react-icons/si'

interface Props {
  className?: string
}

const HomeGithubStats = ({ className = '' }: Props): JSX.Element => {
  return (
    <div
      data-testid="bento-github"
      className={`${className} relative w-full overflow-hidden rounded-3xl`}
    >
      <div className="absolute h-full w-full rounded-3xl border border-white bg-primary bg-opacity-50 p-8 backdrop-blur-lg backdrop-filter" />
      <div className="flex h-full flex-col justify-between gap-2 px-8 py-8 md:py-12">
        <div className="z-10 flex items-center">
          <h2 className="flex-1 bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text text-4xl font-semibold text-transparent  sm:text-3xl md:text-4xl">
            GitHub Stats
          </h2>
          <div className="flex flex-1 justify-end">
            <SvgGradientMotion id="gh-gradient" from="#259D97" to="#1A6A87" />
            <SiGithub className="h-16 w-16 fill-[url(#gh-gradient)]" />
          </div>
        </div>
        <ul className="z-10">
          <li className="flex items-center gap-2">
            <GoRepo />
            <span data-testid="public-repos">2 Public Repositories</span>
          </li>
          <li className="flex items-center gap-2">
            <GoStar />
            <span data-testid="stars">10 Stars Earned</span>
          </li>
          <li className="flex items-center gap-2">
            <GoGitCommit />
            <span data-testid="commits">100 Total Commits</span>
          </li>
          <li className="flex items-center gap-2">
            <GoGitPullRequest />
            <span data-testid="pull-requests">5 Total Pull Requests</span>
          </li>
          <li className="flex items-center gap-2">
            <GoIssueOpened />
            <span data-testid="issues">10 Total Issues</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default HomeGithubStats
