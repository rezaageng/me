/* eslint-disable jest/no-mocks-import */
import projectsResponse from '@/__mocks__/projects-response'
import ProjectItem from '@/components/projects/ProjectItem'
import { render, screen } from '@testing-library/react'
import Image from 'next/image'

const data = projectsResponse.data[0]

test('should render title', () => {
  render(
    <ProjectItem
      index={0}
      title={data.attributes.name}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    >
      <Image
        data-testid="project-cover"
        src="https://me-space.sgp1.digitaloceanspaces.com/strapi-dev/3420ededa931fc0efe78cf9dd4cb7a56.jpeg"
        alt="cover"
        width={1280}
        height={720}
        className="image aspect-video object-cover transition delay-150 duration-100 group-hover:grayscale-0 lg:grayscale-[70%]"
      />
    </ProjectItem>
  )

  const title = screen.getByRole('heading')

  expect(title).toBeInTheDocument()
})

test('should render cover', () => {
  render(
    <ProjectItem
      index={0}
      title={data.attributes.name}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    >
      <Image
        data-testid="project-cover"
        src="https://me-space.sgp1.digitaloceanspaces.com/strapi-dev/3420ededa931fc0efe78cf9dd4cb7a56.jpeg"
        alt="cover"
        width={1280}
        height={720}
        className="image aspect-video object-cover transition delay-150 duration-100 group-hover:grayscale-0 lg:grayscale-[70%]"
      />
    </ProjectItem>
  )

  const banner = screen.getByTestId('project-cover')

  expect(banner).toBeInTheDocument()
})

test('should render correct link', () => {
  render(
    <ProjectItem
      index={0}
      title={data.attributes.name}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    >
      <Image
        data-testid="project-cover"
        src="https://me-space.sgp1.digitaloceanspaces.com/strapi-dev/3420ededa931fc0efe78cf9dd4cb7a56.jpeg"
        alt="cover"
        width={1280}
        height={720}
        className="image aspect-video object-cover transition delay-150 duration-100 group-hover:grayscale-0 lg:grayscale-[70%]"
      />
    </ProjectItem>
  )

  const link = screen.getAllByTestId('project-link')

  expect(link).toHaveLength(2)
  expect(link[0]).toHaveAttribute('href', '/projects/nothing')
  expect(link[1]).toHaveAttribute('href', '/projects/nothing')
})

test('shoud render repository if not null', () => {
  render(
    <ProjectItem
      index={0}
      title={data.attributes.name}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    >
      <Image
        data-testid="project-cover"
        src="https://me-space.sgp1.digitaloceanspaces.com/strapi-dev/3420ededa931fc0efe78cf9dd4cb7a56.jpeg"
        alt="cover"
        width={1280}
        height={720}
        className="image aspect-video object-cover transition delay-150 duration-100 group-hover:grayscale-0 lg:grayscale-[70%]"
      />
    </ProjectItem>
  )

  const repository = screen.getByTestId('repository-url')

  expect(repository).toHaveAttribute(
    'href',
    'https://github.com/rezaageng/nothing'
  )
})

test('should render website if not null', () => {
  render(
    <ProjectItem
      index={0}
      title={data.attributes.name}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    >
      <Image
        data-testid="project-cover"
        src="https://me-space.sgp1.digitaloceanspaces.com/strapi-dev/3420ededa931fc0efe78cf9dd4cb7a56.jpeg"
        alt="cover"
        width={1280}
        height={720}
        className="image aspect-video object-cover transition delay-150 duration-100 group-hover:grayscale-0 lg:grayscale-[70%]"
      />
    </ProjectItem>
  )

  const websiteUrls = screen.getByTestId('website-url')

  expect(websiteUrls).toHaveAttribute('href', 'https://nothing.rezaageng.com')
  expect(websiteUrls).toHaveTextContent('website')
})

test('should render skills', () => {
  render(
    <ProjectItem
      index={0}
      title={data.attributes.name}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    >
      <Image
        data-testid="project-cover"
        src="https://me-space.sgp1.digitaloceanspaces.com/strapi-dev/3420ededa931fc0efe78cf9dd4cb7a56.jpeg"
        alt="cover"
        width={1280}
        height={720}
        className="image aspect-video object-cover transition delay-150 duration-100 group-hover:grayscale-0 lg:grayscale-[70%]"
      />
    </ProjectItem>
  )

  const skills = screen.getAllByTestId('skills')

  expect(skills).toHaveLength(3)
})
