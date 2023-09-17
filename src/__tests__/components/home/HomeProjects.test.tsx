/* eslint-disable jest/no-mocks-import */
import projectsResponse from '@/__mocks__/projects-response'
import HomeProjects from '@/components/home/HomeProjects'
import { render, screen } from '@testing-library/react'

test('should render 2 pinned projects', () => {
  render(<HomeProjects data={projectsResponse.data} />)

  const pinnedProjects = screen.getAllByTestId('pinned-project')

  expect(pinnedProjects).toHaveLength(2)
})

test('should render project titles', async () => {
  render(<HomeProjects data={projectsResponse.data} />)

  const titles = await screen.findAllByTestId('project-title')

  expect(titles).toHaveLength(2)
  expect(titles[0]).toHaveTextContent('Nothing')
  expect(titles[1]).toHaveTextContent('medjed')
})

test('should render project descriptions', () => {
  render(<HomeProjects data={projectsResponse.data} />)

  const descriptions = screen.getAllByTestId('project-description')

  expect(descriptions).toHaveLength(2)
  expect(descriptions[0]).toHaveTextContent(
    'im the bone of my sword steel is my body and iron is my blood ahahhahh'
  )
  expect(descriptions[1]).toHaveTextContent('i say goodbye my dearest')
})

test('should has correct link', () => {
  render(<HomeProjects data={projectsResponse.data} />)

  const links = screen.getAllByTestId('project-link')

  expect(links).toHaveLength(2)
  expect(links[0]).toHaveAttribute('href', '/projects/nothing')
  expect(links[1]).toHaveAttribute('href', '/projects/medjed')
})

test('should render repository url if not null', () => {
  render(<HomeProjects data={projectsResponse.data} />)

  const repositoryUrls = screen.getAllByTestId('repository-url')

  expect(repositoryUrls).toHaveLength(1)
  expect(repositoryUrls[0]).toHaveAttribute(
    'href',
    'https://github.com/rezaageng/nothing'
  )
})

test('should render website if not null', () => {
  render(<HomeProjects data={projectsResponse.data} />)

  const websiteUrls = screen.getAllByTestId('website-url')

  expect(websiteUrls).toHaveLength(1)
  expect(websiteUrls[0]).toHaveAttribute(
    'href',
    'https://nothing.rezaageng.com'
  )
  expect(websiteUrls[0]).toHaveTextContent('website')
})

test('should render skills', () => {
  render(<HomeProjects data={projectsResponse.data} />)

  const skills = screen.getAllByTestId('skills')

  expect(skills).toHaveLength(2)
})
