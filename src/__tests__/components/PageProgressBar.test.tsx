import PageProgressBar from '@/components/PageProgressBar'
import { render, screen } from '@testing-library/react'

test('should render progress bar', () => {
  render(<PageProgressBar />)

  const progressBar = screen.getByTestId('page-progress-bar')

  expect(progressBar).toBeInTheDocument()
})
