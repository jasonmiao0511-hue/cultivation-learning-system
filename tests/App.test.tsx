import { describe, it, expect, beforeEach } from 'vitest'
import { cleanup, screen } from '@testing-library/react'
import App from '../src/App'
import { render } from './test-utils'

describe('App scaffold', () => {
  beforeEach(() => cleanup())

  it('renders the navbar title', () => {
    render(<App />)
    expect(screen.getByText('知了暑假')).toBeInTheDocument()
  })

  it('renders the home page content', () => {
    render(<App />, { route: '/' })
    expect(screen.getByText('语文')).toBeInTheDocument()
    expect(screen.getByText('课内古诗词')).toBeInTheDocument()
  })
})
