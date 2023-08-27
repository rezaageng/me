/* eslint-disable jest/no-mocks-import */
import educationsResponse from '@/__mocks__/educations-response'
import experiencesResponse from '@/__mocks__/experiences-response'
import HomeTimeline from '@/components/home/HomeTimeline'
import { render, screen } from '@testing-library/react'

test('should render title', () => {
  render(
    <HomeTimeline
      educations={educationsResponse.data}
      experience={experiencesResponse.data}
    />
  )

  const title = screen.getAllByTestId('timeline-title')

  expect(title[0]).toHaveTextContent('[ ...experience ]')
  expect(title[1]).toHaveTextContent('[ ...educations ]')
})

test('should render experience items', () => {
  render(
    <HomeTimeline
      educations={educationsResponse.data}
      experience={experiencesResponse.data}
    />
  )

  const items = screen.getAllByTestId('timeline-item')

  expect(items).toHaveLength(5)
})

test('should render item title', () => {
  render(
    <HomeTimeline
      educations={educationsResponse.data}
      experience={experiencesResponse.data}
    />
  )

  const title = screen.getAllByTestId('timeline-item-title')

  expect(title[0]).toBeInTheDocument()
})

test('should render date', () => {
  render(
    <HomeTimeline
      educations={educationsResponse.data}
      experience={experiencesResponse.data}
    />
  )

  const date = screen.getAllByTestId('timeline-item-date')

  expect(date[0]).toBeInTheDocument()
})

test('should render description', () => {
  render(
    <HomeTimeline
      educations={educationsResponse.data}
      experience={experiencesResponse.data}
    />
  )

  const description = screen.getAllByTestId('timeline-item-description')

  expect(description[0]).toBeInTheDocument()
})

test('should render subtitle', () => {
  render(
    <HomeTimeline
      educations={educationsResponse.data}
      experience={experiencesResponse.data}
    />
  )

  const subtitle = screen.getAllByTestId('timeline-item-subtitle')

  expect(subtitle[0]).toBeInTheDocument()
})

test('should render location', () => {
  render(
    <HomeTimeline
      educations={educationsResponse.data}
      experience={experiencesResponse.data}
    />
  )

  const location = screen.getAllByTestId('timeline-item-location')

  expect(location[0]).toBeInTheDocument()
})
