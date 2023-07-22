import HomeStats from '@/components/home/HomeStats'
import HomeWakaWeek from '@/components/home/stats/HomeWakaWeek'
import { render, screen } from '@testing-library/react'

test('should render skills', () => {
  render(<HomeStats />)

  const skills = screen.getByTestId('bento-skills')

  expect(skills).toBeInTheDocument()
})

test('should render github stats', () => {
  render(<HomeStats />)

  const githubStats = screen.getByTestId('bento-github')

  expect(githubStats).toBeInTheDocument()
})

test('should render wakatime all time', () => {
  render(<HomeStats />)

  const wakatimeAllTime = screen.getByTestId('bento-waka-all')

  expect(wakatimeAllTime).toBeInTheDocument()
})

test('should render wakatime last 7 days', () => {
  render(<HomeWakaWeek />)

  const wakaWeek = screen.getByTestId('bento-waka-week')

  expect(wakaWeek).toBeInTheDocument()
})

test('should render leetcode stats', () => {
  render(<HomeStats />)

  const leetcodeStats = screen.getByTestId('bento-leet')

  expect(leetcodeStats).toBeInTheDocument()
})
