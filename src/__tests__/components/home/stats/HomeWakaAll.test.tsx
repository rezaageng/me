/* eslint-disable jest/no-mocks-import */
import { wakaAllResponse } from '@/__mocks__/wakatime'
import HomeWakaAll from '@/components/home/stats/HomeWakaAll'
import { render, screen } from '@testing-library/react'
import '@/__mocks__/intersectionObserverMock'
import { format, parseISO } from 'date-fns'

test('should render coding time', () => {
  render(<HomeWakaAll data={wakaAllResponse.data} />)

  const codingTime = screen.getByTestId('coding-time')

  expect(codingTime).toHaveTextContent('821Hrs')
})

test('should render start date', () => {
  render(<HomeWakaAll data={wakaAllResponse.data} />)

  const startDate = screen.getByTestId('start-date')

  expect(startDate.innerHTML).toBe(
    `Coding Time Since ${format(
      parseISO(wakaAllResponse.data.range.start),
      'MMMM d, yyyy'
    )}`
  )
})
