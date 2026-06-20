import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import Chinese from '../../src/pages/subject/Chinese'
import { render } from '../test-utils'

describe('Chinese', () => {
  it('renders chinese subject page', () => {
    render(<Chinese />)
    expect(screen.getByText(/语文功法/)).toBeInTheDocument()
  })
})
