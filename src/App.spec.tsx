import { render, screen } from '@testing-library/react'

import { App } from './App'

describe('App', () => {
  it('render', () => {
    render(<App />)

    expect(screen.getByRole('heading')).toHaveTextContent('base-boilerplate')
  })
})
