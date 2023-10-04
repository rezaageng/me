/* eslint-disable jest/no-mocks-import */
import { solvedProblems } from '@/__mocks__/leetcode'
import HomeLeet from '@/components/home/stats/HomeLeet'
import { render, screen } from '@testing-library/react'
import '@/__mocks__/intersectionObserverMock'

test('should render title', () => {
  render(<HomeLeet data={solvedProblems} />)

  const title = screen.getByText('LeetCode')

  expect(title).toBeInTheDocument()
})

test('should render leet rank', () => {
  render(<HomeLeet data={solvedProblems} />)

  const leetRank = screen.getByTestId('leet-rank')

  expect(leetRank).toHaveTextContent('Rank 2,102,921')
})

test('should render leet solved', () => {
  render(<HomeLeet data={solvedProblems} />)

  const leetSolved = screen.getByTestId('leet-solved')

  expect(leetSolved).toHaveTextContent('15 Solved')
})

test('should render submissions', () => {
  render(<HomeLeet data={solvedProblems} />)

  const submissions = screen.getByTestId('leet-submissions-last')

  expect(submissions).toHaveTextContent(
    `29 Submissions (${new Date().getFullYear()})`
  )
})

test('should render leet easy', () => {
  render(<HomeLeet data={solvedProblems} />)

  const leetEasy = screen.getByText('Easy')

  expect(leetEasy).toBeInTheDocument()
})

test('should render leet medium', () => {
  render(<HomeLeet data={solvedProblems} />)

  const leetMedium = screen.getByText('Medium')

  expect(leetMedium).toBeInTheDocument()
})

test('should render leet hard', () => {
  render(<HomeLeet data={solvedProblems} />)

  const leetHard = screen.getByText('Hard')

  expect(leetHard).toBeInTheDocument()
})

test('should render solved problems for each difficulty', () => {
  render(<HomeLeet data={solvedProblems} />)

  const easySubmissions = screen.getAllByTestId('leet-problem-solved')

  expect(easySubmissions[0]).toHaveTextContent('11/706')
  expect(easySubmissions[1]).toHaveTextContent('4/1492')
  expect(easySubmissions[2]).toHaveTextContent('0/620')
})

test('should render easy beats', () => {
  render(<HomeLeet data={solvedProblems} />)

  const easyBeats = screen.getAllByTestId('leet-problem-beats')

  expect(easyBeats[0]).toHaveTextContent('Beats 33.29%')
  expect(easyBeats[1]).toHaveTextContent('Beats 17.60%')
  expect(easyBeats[2]).toHaveTextContent('Not enough data')
})
