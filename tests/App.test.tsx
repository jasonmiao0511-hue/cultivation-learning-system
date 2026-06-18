import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App'

describe('App scaffold', () => {
  beforeEach(() => cleanup())

  it('renders the navbar title', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText('修仙学习')).toBeInTheDocument()
  })

  it('renders the home page content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText('道友，今日该闭关了')).toBeInTheDocument()
  })
})
