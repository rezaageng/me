/* eslint-disable jest/no-mocks-import */
import HomeStats from '@/components/home/HomeStats'
import HomeWakaWeek from '@/components/home/stats/HomeWakaWeek'
import { render, screen } from '@testing-library/react'
import '@/__mocks__/intersectionObserverMock'

test('should render skills', async () => {
  render(await HomeStats())

  const skills = screen.getByTestId('bento-skills')

  expect(skills).toBeInTheDocument()
})

test('should render github stats', async () => {
  render(await HomeStats())

  const githubStats = screen.getByTestId('bento-github')

  expect(githubStats).toBeInTheDocument()
})

test('should render wakatime all time', async () => {
  render(await HomeStats())

  const wakatimeAllTime = screen.getByTestId('bento-waka-all')

  expect(wakatimeAllTime).toBeInTheDocument()
})

test('should render wakatime last 7 days', async () => {
  render(<HomeWakaWeek />)

  const wakaWeek = screen.getByTestId('bento-waka-week')

  expect(wakaWeek).toBeInTheDocument()
})

test('should render leetcode stats', async () => {
  render(await HomeStats())

  const leetcodeStats = screen.getByTestId('bento-leet')

  expect(leetcodeStats).toBeInTheDocument()
})
