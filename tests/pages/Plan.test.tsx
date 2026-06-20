import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Plan from '../../src/pages/Plan'

describe('Plan', () => {
  it('renders 62-day plan heading and filter buttons', () => {
    render(
      <MemoryRouter>
        <Plan />
      </MemoryRouter>,
    )
    expect(screen.getByText(/功法总纲/)).toBeInTheDocument()
    expect(screen.getByText('全部')).toBeInTheDocument()
    expect(screen.getByText('英语')).toBeInTheDocument()
    expect(screen.getByText('语文')).toBeInTheDocument()
    expect(screen.getByText('数学')).toBeInTheDocument()
  })
})
