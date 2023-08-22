import HomeMain from '@/components/home/HomeMain'
import HomeStats from '@/components/home/HomeStats'
import { GET_GH_STATS } from '@/graphql/github-gql'
import { GET_LEET_SOLVED_PROBLEMS } from '@/graphql/leetcode-gql'
import { getClient } from '@/libs/apollo-client'
import { getHomeData, getSkills, getWakaAll, getWakaWeek } from '@/ssg'

const Home = async (): Promise<JSX.Element> => {
  const homeRes = await getHomeData()
  const skills = await getSkills()
  const wakaAll = await getWakaAll()
  const wakaWeek = await getWakaWeek()

  const gitHubStats = await getClient().query<GitHubStats>({
    query: GET_GH_STATS,
    variables: { login: process.env.GITHUB_USERNAME }
  })

  const leetSolvedProblems = await getClient().query<SolvedProblems>({
    query: GET_LEET_SOLVED_PROBLEMS,
    variables: {
      username: process.env.LEETCODE_USERNAME,
      year: new Date().getFullYear()
    }
  })

  return (
    <>
      <HomeMain data={homeRes.data} />
      <HomeStats
        skills={skills}
        wakaAll={wakaAll}
        wakaWeek={wakaWeek}
        gitHubStats={gitHubStats}
        leetSolvedProblems={leetSolvedProblems}
      />
    </>
  )
}

export default Home
