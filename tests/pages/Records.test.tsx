import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Records from '../../src/pages/Records'

describe('Records', () => {
  it('renders records page with stats and badges', () => {
    render(
      <MemoryRouter>
        <Records />
      </MemoryRouter>,
    )
    expect(screen.getByText(/累计闭关天数/)).toBeInTheDocument()
    expect(screen.getByText(/成就徽章/)).toBeInTheDocument()
  })
})
