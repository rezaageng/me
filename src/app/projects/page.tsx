import ProjectItem from '@/components/projects/ProjectItem'
import { getProjects } from '@/ssg'

const Projects = async (): Promise<JSX.Element> => {
  const { data } = await getProjects({})

  return (
    <section className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3">
      {data.map((project, i) => (
        <ProjectItem
          key={project.id}
          index={i}
          title={project.attributes.name}
          cover={project.attributes.cover.data.attributes.formats.medium.url}
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
