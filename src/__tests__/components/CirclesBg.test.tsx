import CirclesBg from '@/components/background/CirclesBg'
import { render, screen } from '@testing-library/react'

test('should render three motion.div elements', () => {
  render(<CirclesBg />)
  const circles = screen.getAllByTestId('circle')

  expect(circles).toHaveLength(3)
})
