import HomeGithubStats from './stats/HomeGithubStats'
import HomeSkills from './stats/HomeSkills'
import HomeWakaAll from './stats/HomeWakaAll'
import HomeLeet from './stats/HomeLeet'
import HomeWakaWeek from './stats/HomeWakaWeek'
import { type SkillCategoriesResponse } from '@/@types/skills'
import { type ApolloQueryResult } from '@apollo/client'

interface Props {
  skills: SkillCategoriesResponse
  wakaAll: WakaAllTime
  wakaWeek: WakaWeek
  gitHubStats: ApolloQueryResult<GitHubStats>
  leetSolvedProblems: ApolloQueryResult<SolvedProblems>
}

const HomeStats = async ({
  gitHubStats,
  leetSolvedProblems,
  skills,
  wakaAll,
  wakaWeek
}: Props): Promise<JSX.Element> => {
  return (
    <section className="grid max-w-5xl auto-cols-auto auto-rows-auto gap-5 p-6 sm:grid-cols-bento sm:grid-rows-bento">
      <HomeSkills
        className="col-span-1 row-span-1 aspect-[3/4] sm:col-span-2 sm:row-span-2 sm:aspect-auto"
        data={skills.data}
      />
      <HomeWakaAll data={wakaAll.data} className="col-span-1 row-span-1" />
      <HomeGithubStats
        data={gitHubStats.data}
        className="col-span-1 row-span-1"
      />
      <HomeWakaWeek data={wakaWeek} className="max-h-[280.5px] sm:max-h-none" />
      <HomeLeet
        data={leetSolvedProblems.data}
        className="col-span-1 sm:col-span-2"
      />
    </section>
  )
}

export default HomeStats
