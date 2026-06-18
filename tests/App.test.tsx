import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import App from '../src/App'

describe('App scaffold', () => {
  beforeEach(() => cleanup())

  it('renders the title', () => {
    render(<App />)
    expect(screen.getByText('修仙学习系统')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<App />)
    expect(screen.getByText('项目脚手架已就绪')).toBeInTheDocument()
  })
})
