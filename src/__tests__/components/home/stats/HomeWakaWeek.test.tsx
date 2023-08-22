/* eslint-disable jest/no-mocks-import */
import { wakaWeek } from '@/__mocks__/wakatime'
import HomeWakaWeek from '@/components/home/stats/HomeWakaWeek'
import { fireEvent, render, screen } from '@testing-library/react'

test('should render global rank', () => {
  render(<HomeWakaWeek data={wakaWeek} />)

  const globalRank = screen.getByTestId('world-rank')

  expect(globalRank).toHaveTextContent('4212ndWorld Rank')
})

test('should render country rank', () => {
  render(<HomeWakaWeek data={wakaWeek} />)

  const countryRank = screen.getByTestId('country-rank')

  expect(countryRank).toHaveTextContent(`195thCountry Rank`)
})

test('should render hours coded (last week)', () => {
  render(<HomeWakaWeek data={wakaWeek} />)

  const hoursCoded = screen.getByTestId('hours-coded')

  expect(hoursCoded).toHaveTextContent('21H 2MCoding Time')
})

test('should render daily average', () => {
  render(<HomeWakaWeek data={wakaWeek} />)

  const dailyAverage = screen.getByTestId('daily-average')

  expect(dailyAverage).toHaveTextContent('3H 30MDaily Average')
})

test('should render language list', async () => {
  render(<HomeWakaWeek data={wakaWeek} />)

  const button = screen.getByRole('button')

  fireEvent.click(button)

  const list = await screen.findByTestId('lang-list')

  expect(list).toBeInTheDocument()
})

test('should render 5 languages', async () => {
  render(<HomeWakaWeek data={wakaWeek} />)

  const button = screen.getByRole('button')

  fireEvent.click(button)

  const lang = await screen.findAllByTestId('lang')

  expect(lang).toHaveLength(5)
})
