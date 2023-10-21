/* eslint-disable jest/no-mocks-import */
import homeRes from '@/__mocks__/home-response'
import HomeSummary from '@/components/home/HomeSummary'
import { render, screen } from '@testing-library/react'
import '@/__mocks__/intersectionObserverMock'

test('should render short summary', () => {
  render(<HomeSummary data={homeRes.data} />)

  const text = screen.getByTestId('short-summary')

  expect(text).toBeInTheDocument()
})
