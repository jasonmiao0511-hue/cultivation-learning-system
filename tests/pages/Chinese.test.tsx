import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Chinese from '../../src/pages/subject/Chinese'

describe('Chinese', () => {
  it('renders chinese subject page', () => {
    render(
      <MemoryRouter>
        <Chinese />
      </MemoryRouter>,
    )
    expect(screen.getByText(/语文功法/)).toBeInTheDocument()
  })
})
