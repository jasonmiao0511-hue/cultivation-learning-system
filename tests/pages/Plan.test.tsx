import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import Plan from '../../src/pages/Plan'
import { render } from '../test-utils'

describe('Plan', () => {
  it('renders 62-day plan heading and filter buttons', () => {
    render(<Plan />)
    expect(screen.getByText(/课程总纲/)).toBeInTheDocument()
    expect(screen.getByText('全部')).toBeInTheDocument()
    expect(screen.getByText('英语')).toBeInTheDocument()
    expect(screen.getByText('语文')).toBeInTheDocument()
    expect(screen.getByText('数学')).toBeInTheDocument()
  })
})
