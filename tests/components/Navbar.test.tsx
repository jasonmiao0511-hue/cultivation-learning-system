import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../../src/components/feature/Navbar'

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    expect(screen.getByText('洞府')).toBeInTheDocument()
    expect(screen.getByText('今日历练')).toBeInTheDocument()
  })
})
