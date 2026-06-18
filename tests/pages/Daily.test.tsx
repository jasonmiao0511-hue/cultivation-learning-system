import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Daily from '../../src/pages/Daily'

describe('Daily', () => {
  it('renders today tasks', () => {
    render(
      <MemoryRouter>
        <Daily />
      </MemoryRouter>,
    )
    expect(screen.getByText(/今日历练/)).toBeInTheDocument()
  })
})
