/* eslint-disable jest/no-mocks-import */
import projectsResponse from '@/__mocks__/projects-response'
import ProjectItem from '@/components/projects/ProjectItem'
import { render, screen } from '@testing-library/react'

const data = projectsResponse.data[0]

test('should render title', () => {
  render(
    <ProjectItem
      index={0}
      title={data.attributes.name}
      cover={data.attributes.cover.data.attributes.formats.medium.url}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    />
  )

  const title = screen.getByRole('heading')

  expect(title).toBeInTheDocument()
})

test('should render cover', () => {
  render(
    <ProjectItem
      index={0}
      title={data.attributes.name}
      cover={data.attributes.cover.data.attributes.formats.medium.url}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    />
  )

  const banner = screen.getByTestId('project-cover')

  expect(banner).toBeInTheDocument()
})

test('should render correct link', () => {
  render(
    <ProjectItem
      index={0}
      title={data.attributes.name}
      cover={data.attributes.cover.data.attributes.formats.medium.url}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    />
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
      cover={data.attributes.cover.data.attributes.formats.medium.url}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    />
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
      cover={data.attributes.cover.data.attributes.formats.medium.url}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    />
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
      cover={data.attributes.cover.data.attributes.formats.medium.url}
      slug={data.attributes.slug}
      repository={data.attributes.repository}
      website={data.attributes.website}
      websiteLabel={data.attributes.websiteLabel}
      skills={data.attributes.skills.data}
    />
  )

  const skills = screen.getAllByTestId('skills')

  expect(skills).toHaveLength(3)
})
