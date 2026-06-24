import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import Settings from '../../src/pages/Settings'
import { render } from '../test-utils'

describe('Settings', () => {
  it('renders settings page with custom tasks and backup sections', () => {
    render(<Settings />)
    expect(screen.getByRole('heading', { name: /自定义任务/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /学分档案备份/ })).toBeInTheDocument()
  })
})
