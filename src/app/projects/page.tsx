import ProjectItem from '@/components/projects/ProjectItem'
import { getProjects, getProjectsPage } from '@/ssg'
import { type Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await getProjectsPage()

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

const Projects = async (): Promise<JSX.Element> => {
  const { data } = await getProjects({})

  return (
    <section className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3">
      {data.map((project, i) => (
        <ProjectItem
          key={project.id}
          index={i}
          title={project.attributes.name}
          cover={
            project.attributes.cover.data.attributes.formats.medium?.url ??
            project.attributes.cover.data.attributes.url
          }
          slug={project.attributes.slug}
          repository={project.attributes.repository}
          website={project.attributes.website}
          websiteLabel={project.attributes.websiteLabel}
          skills={project.attributes.skills.data}
        />
      ))}
    </section>
  )
}

export default Projects
