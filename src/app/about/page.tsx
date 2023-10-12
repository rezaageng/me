import { AboutBg } from '@/components/about/AboutBg'
import AboutEducations from '@/components/about/AboutEducations'
import AboutExperience from '@/components/about/AboutExperience'
import AboutProjects from '@/components/about/AboutProjects'
import AboutSkills from '@/components/about/AboutSkills'
import AboutSummary from '@/components/about/AboutSummary'
import AboutTitle from '@/components/about/AboutTitle'
import {
  getEducations,
  getExperience,
  getHomeData,
  getLink,
  getProjects,
  getSkills
} from '@/ssg'

const About = async (): Promise<JSX.Element> => {
  const home = (await getHomeData()).data
  const skills = (await getSkills()).data
  const experience = (await getExperience()).data
  const projects = (await getProjects({ isPinned: true })).data
  const educations = (await getEducations()).data
  const link = (await getLink()).data

  return (
    <>
      <AboutBg />
      <section className="flex flex-col gap-6 p-6 leading-loose tracking-wider text-gray-300  lg:flex-row">
        <div className="lg:flex-1">
          <AboutTitle data={home} link={link} />
        </div>
        <div className="flex flex-col gap-8 lg:flex-1">
          {home !== null ? (
            <AboutSummary data={home.attributes.summary} />
          ) : null}
          <AboutSkills data={skills} />
          <AboutExperience data={experience} />
          <AboutProjects data={projects} />
          <AboutEducations data={educations} />
        </div>
      </section>
    </>
  )
}

export default About
