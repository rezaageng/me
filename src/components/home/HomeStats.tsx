import { getSkills, getWakaAll } from '@/ssg'
import HomeGithubStats from './stats/HomeGithubStats'
import HomeSkills from './stats/HomeSkills'
import HomeWakaAll from './stats/HomeWakaAll'
import { getClient } from '@/libs/apollo-client'
import { GET_GH_STATS } from '@/graphql/github-gql'

const HomeStats = async (): Promise<JSX.Element> => {
  const skills = await getSkills()
  const wakaAll = await getWakaAll()

  const gitHubStats = await getClient().query<GitHubStats>({
    query: GET_GH_STATS,
    variables: { login: process.env.GITHUB_USERNAME }
  })

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
    </section>
  )
}

export default HomeStats
