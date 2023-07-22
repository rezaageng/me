import HomeLeet from '@/components/home/stats/HomeLeet'
import { render, screen } from '@testing-library/react'

test('should render leet rank', () => {
  render(<HomeLeet />)

  const leetRank = screen.getByTestId('leet-rank')

  expect(leetRank.innerHTML).toBe('Rank: 1')
})

test('should render leet solved', () => {
  render(<HomeLeet />)

  const leetSolved = screen.getByTestId('leet-solved')

  expect(leetSolved.innerHTML).toBe('Solved: 10')
})

test('should render leet easy', () => {
  render(<HomeLeet />)

  const leetEasy = screen.getByTestId('leet-easy')

  expect(leetEasy.innerHTML).toBe('Easy: 5')
})

test('should render leet medium', () => {
  render(<HomeLeet />)

  const leetMedium = screen.getByTestId('leet-medium')

  expect(leetMedium.innerHTML).toBe('Medium: 3')
})

test('should render leet hard', () => {
  render(<HomeLeet />)

  const leetHard = screen.getByTestId('leet-hard')

  expect(leetHard.innerHTML).toBe('Hard: 2')
})
