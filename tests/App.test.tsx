import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App scaffold', () => {
  it('renders the title', () => {
    render(<App />)
    expect(screen.getByText('修仙学习系统')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<App />)
    expect(screen.getByText('项目脚手架已就绪')).toBeInTheDocument()
  })
})
