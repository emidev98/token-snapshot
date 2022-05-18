import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const counterElement = screen.getByText(/Counter/)
  expect(counterElement).toBeInTheDocument()
})
