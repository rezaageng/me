import HomeGithubStats from '@/components/home/stats/HomeGithubStats'
import { render, screen } from '@testing-library/react'

test('should render title', () => {
  render(<HomeGithubStats />)

  const title = screen.getByText('Github Stats')

  expect(title).toBeInTheDocument()
})

test('should render public repositories count', () => {
  render(<HomeGithubStats />)

  const publicRepos = screen.getByTestId('public-repos')

  expect(publicRepos.innerHTML).toBe('2 Public Repositories')
})

test('should render stars earned count', () => {
  render(<HomeGithubStats />)

  const stars = screen.getByTestId('stars')

  expect(stars.innerHTML).toBe('10 Stars Earned')
})

test('should render total commits', () => {
  render(<HomeGithubStats />)

  const commits = screen.getByTestId('commits')

  expect(commits.innerHTML).toBe('100 Total Commits')
})

test('should render total pull request', () => {
  render(<HomeGithubStats />)

  const pullRequest = screen.getByTestId('pull-request')

  expect(pullRequest.innerHTML).toBe('5 Total Pull Request')
})

test('should render total issues', () => {
  render(<HomeGithubStats />)

  const issues = screen.getByTestId('issues')

  expect(issues.innerHTML).toBe('10 Total Issues')
})
