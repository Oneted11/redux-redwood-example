import { render } from '@redwoodjs/testing'

import Counter from './Counter'

describe('Counter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Counter />)
    }).not.toThrow()
  })
})
