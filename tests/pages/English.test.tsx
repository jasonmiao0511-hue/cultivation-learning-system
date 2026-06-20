import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import English from '../../src/pages/subject/English'

describe('English', () => {
  it('renders english subject page', () => {
    render(
      <MemoryRouter>
        <English />
      </MemoryRouter>,
    )
    expect(screen.getByText(/英语功法/)).toBeInTheDocument()
  })
})
