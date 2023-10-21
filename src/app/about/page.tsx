import { AboutBg } from '@/components/about/AboutBg'
import AboutEducations from '@/components/about/AboutEducations'
import AboutExperience from '@/components/about/AboutExperience'
import AboutProjects from '@/components/about/AboutProjects'
import AboutSkills from '@/components/about/AboutSkills'
import AboutSummary from '@/components/about/AboutSummary'
import AboutTitle from '@/components/about/AboutTitle'
import {
  getAboutPage,
  getEducations,
  getExperience,
  getHomeData,
  getLink,
  getProjects,
  getSkills
} from '@/ssg'
import { type Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await getAboutPage()

  const seo = data.attributes.seo

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,

    alternates: {
      canonical: seo.canonicalUrl
    },
    openGraph: {
      title: seo.metaSocial[0].title,
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
    },
    twitter: {
      title: seo.metaSocial[1].title
    }
  }
}

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
