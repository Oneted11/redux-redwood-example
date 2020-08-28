import { render } from '@redwoodjs/testing'

import CounterPage from './CounterPage'

describe('CounterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CounterPage />)
    }).not.toThrow()
  })
})
