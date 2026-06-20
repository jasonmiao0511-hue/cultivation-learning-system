import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import Home from '../../src/pages/Home'
import { render } from '../test-utils'

describe('Home', () => {
  it('renders hero and start button', () => {
    render(<Home />)
    expect(screen.getByText('道友，今日该闭关了')).toBeInTheDocument()
    expect(screen.getByText('开始历练')).toBeInTheDocument()
  })
})
