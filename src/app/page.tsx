import HomeEnd from '@/components/home/HomeEnd'
import HomeMain from '@/components/home/HomeMain'
import HomeProjects from '@/components/home/HomeProjects'
import HomeStats from '@/components/home/HomeStats'
import HomeThanks from '@/components/home/HomeThanks'
import HomeTimeline from '@/components/home/HomeTimeline'
import { GET_GH_STATS } from '@/graphql/github-gql'
import { GET_LEET_SOLVED_PROBLEMS } from '@/graphql/leetcode-gql'
import { getClient } from '@/libs/apollo-client'
import {
  getEducations,
  getExperience,
  getHomeData,
  getLink,
  getProjects,
  getSkills,
  getWakaAll,
  getWakaWeek
} from '@/ssg'
import { type Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await getHomeData()

  const seo = data.attributes.seo

  return {
    title: {
      absolute: seo.metaTitle
    },
    description: seo.metaDescription,
    keywords: seo.keywords,

    alternates: {
      canonical: seo.canonicalUrl
    },
    openGraph: {
      title: {
        absolute: seo.metaSocial[0].title
      },
      description: seo.metaSocial[0].description,
      type: 'website',
      url: seo.canonicalUrl,
      images: [
        {
          url: seo.metaSocial[0].image.data.attributes.formats.large.url,
          width: seo.metaSocial[0].image.data.attributes.formats.large.width,
          height: seo.metaSocial[0].image.data.attributes.formats.large.height,
          alt:
            seo.metaSocial[0].image.data.attributes.alternativeText ??
            'large image'
        },
        {
          url: seo.metaSocial[0].image.data.attributes.formats.medium.url,
          width: seo.metaSocial[0].image.data.attributes.formats.medium.width,
          height: seo.metaSocial[0].image.data.attributes.formats.medium.height,
          alt:
            seo.metaSocial[0].image.data.attributes.alternativeText ??
            'medium image'
        },
        {
          url: seo.metaSocial[0].image.data.attributes.formats.small.url,
          width: seo.metaSocial[0].image.data.attributes.formats.small.width,
          height: seo.metaSocial[0].image.data.attributes.formats.small.height,
          alt:
            seo.metaSocial[0].image.data.attributes.alternativeText ??
            'small image'
        },
        {
          url: seo.metaSocial[0].image.data.attributes.formats.thumbnail.url,
          width:
            seo.metaSocial[0].image.data.attributes.formats.thumbnail.width,
          height:
            seo.metaSocial[0].image.data.attributes.formats.thumbnail.height,
          alt:
            seo.metaSocial[0].image.data.attributes.alternativeText ??
            'thumbnail image'
        }
      ]
    }
  }
}

const Home = async (): Promise<JSX.Element> => {
  const homeRes = await getHomeData()
  const skills = await getSkills()
  const wakaAll = await getWakaAll()
  const wakaWeek = await getWakaWeek()
  const experience = await getExperience()
  const educations = await getEducations()
  const projects = await getProjects({ isPinned: true })
  const link = await getLink()

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
      <HomeTimeline experience={experience.data} educations={educations.data} />
      <HomeProjects data={projects.data} />
      <HomeEnd />
      <HomeThanks link={link.data} />
    </>
  )
}

export default Home
