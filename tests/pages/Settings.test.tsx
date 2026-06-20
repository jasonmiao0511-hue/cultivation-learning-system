import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Settings from '../../src/pages/Settings'

describe('Settings', () => {
  it('renders settings page with custom tasks and backup sections', () => {
    render(
      <MemoryRouter>
        <Settings />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: /自定义历练/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /修为档案备份/ })).toBeInTheDocument()
  })
})
