/* eslint-disable jest/no-mocks-import */
import { gitHubStats } from '@/__mocks__/github'
import HomeGithubStats from '@/components/home/stats/HomeGithubStats'
import { render, screen } from '@testing-library/react'

test('should render title', () => {
  render(<HomeGithubStats data={gitHubStats} />)

  const title = screen.getByText('GitHub Stats')

  expect(title).toBeInTheDocument()
})

test('should render public repositories count', () => {
  render(<HomeGithubStats data={gitHubStats} />)

  const publicRepos = screen.getByTestId('public-repos')

  expect(publicRepos.innerHTML).toBe('29 Public Repositories')
})

test('should render stars earned count', () => {
  render(<HomeGithubStats data={gitHubStats} />)

  const stars = screen.getByTestId('stars')

  expect(stars.innerHTML).toBe('11&nbsp;Stars Earned')
})

test('should render total commits', () => {
  render(<HomeGithubStats data={gitHubStats} />)

  const currentYear = new Date().getFullYear()

  const commits = screen.getByTestId('commits')

  expect(commits.innerHTML).toBe(`365&nbsp; Commits (${currentYear})`)
})

test('should render total pull request', () => {
  render(<HomeGithubStats data={gitHubStats} />)

  const pullRequest = screen.getByTestId('pull-requests')

  expect(pullRequest.innerHTML).toBe('22 Pull Requests')
})

test('should render total issues', () => {
  render(<HomeGithubStats data={gitHubStats} />)

  const issues = screen.getByTestId('issues')

  expect(issues.innerHTML).toBe('1&nbsp;Issues')
})

test('should render contributions', () => {
  render(<HomeGithubStats data={gitHubStats} />)

  const contributions = screen.getByTestId('contributions')

  expect(contributions.innerHTML).toBe('4 Contributed to')
})
