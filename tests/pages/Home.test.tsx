import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import Home from '../../src/pages/Home'
import { render } from '../test-utils'

describe('Home course hall', () => {
  it('renders subject nav and chapter cards', () => {
    render(<Home />)
    expect(screen.getByText('语文')).toBeInTheDocument()
    expect(screen.getByText('课内古诗词')).toBeInTheDocument()
  })

  it('reflects active subject in URL via search params', () => {
    render(<Home />, { route: '/?subject=math' })
    expect(screen.getByText('数学')).toBeInTheDocument()
    expect(screen.getByText('有理数')).toBeInTheDocument()
  })

  it('falls back to chinese for invalid subject param', () => {
    render(<Home />, { route: '/?subject=invalid' })
    expect(screen.getByText('语文')).toBeInTheDocument()
    expect(screen.getByText('课内古诗词')).toBeInTheDocument()
  })
})
