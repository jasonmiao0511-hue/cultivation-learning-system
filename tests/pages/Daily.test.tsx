import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import Daily from '../../src/pages/Daily'
import { render } from '../test-utils'

describe('Daily', () => {
  it('renders today tasks', () => {
    render(<Daily />)
    expect(screen.getByText(/今日历练/)).toBeInTheDocument()
  })
})
