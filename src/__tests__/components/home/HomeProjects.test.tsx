import HomeProjects from '@/components/home/HomeProjects'
import { render, screen } from '@testing-library/react'

test('should render title', () => {
  render(<HomeProjects />)

  const title = screen.getByText(/projects/i)

  expect(title).toBeInTheDocument()
})

test('should render 2 pinned projects', () => {
  render(<HomeProjects />)

  const pinnedProjects = screen.getAllByTestId('pinned-project')

  expect(pinnedProjects).toHaveLength(2)
})

test('should render project titles', async () => {
  render(<HomeProjects />)

  const titles = await screen.findAllByTestId('project-title')

  expect(titles).toHaveLength(2)
  expect(titles[0]).toHaveTextContent('Nothing')
  expect(titles[1]).toHaveTextContent('medjed')
})

test('should render project descriptions', () => {
  render(<HomeProjects />)

  const descriptions = screen.getAllByTestId('project-description')

  expect(descriptions).toHaveLength(2)
  expect(descriptions[0]).toHaveTextContent(
    'im the bone of my sword steel is my body and iron is my blood ahahhahh'
  )
  expect(descriptions[1]).toHaveTextContent('i say goodbye my dearest')
})

test('should has correct link', () => {
  render(<HomeProjects />)

  const links = screen.getAllByTestId('project-link')

  expect(links).toHaveLength(2)
  expect(links[0]).toHaveAttribute('href', '/projects/1')
  expect(links[1]).toHaveAttribute('href', '/projects/2')
})

test('should render repository url if not null', () => {
  render(<HomeProjects />)

  const repositoryUrls = screen.getAllByTestId('repository-url')

  expect(repositoryUrls).toHaveLength(1)
  expect(repositoryUrls[0]).toHaveAttribute(
    'href',
    'https://github.com/rezaageng/nothing/'
  )
})
