import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../../src/components/feature/Navbar'

describe('Navbar', () => {
  it('shows new app name', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    expect(screen.getByText('知了暑假')).toBeInTheDocument()
  })

  it('shows rebranded navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    expect(screen.getByText('首页')).toBeInTheDocument()
    expect(screen.getByText('今日学习')).toBeInTheDocument()
    expect(screen.getByText('学习计划')).toBeInTheDocument()
    expect(screen.getByText('今日复习')).toBeInTheDocument()
    expect(screen.getByText('学习记录')).toBeInTheDocument()
    expect(screen.getByText('设置')).toBeInTheDocument()
  })
})
