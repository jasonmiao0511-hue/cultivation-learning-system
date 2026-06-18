import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../../src/pages/Home'

describe('Home', () => {
  it('renders hero and start button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )
    expect(screen.getByText('道友，今日该闭关了')).toBeInTheDocument()
    expect(screen.getByText('开始历练')).toBeInTheDocument()
  })
})
