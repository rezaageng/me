import HomeWakaAll from '@/components/home/stats/HomeWakaAll'
import { render, screen } from '@testing-library/react'

test('should render coding time', () => {
  render(<HomeWakaAll />)

  const codingTime = screen.getByTestId('coding-time')

  expect(codingTime.innerHTML).toBe('700 Hours')
})

test('should render start date', () => {
  render(<HomeWakaAll />)

  const startDate = screen.getByTestId('start-date')

  expect(startDate.innerHTML).toBe('Coding Time Since Aug 2, 2021')
})
