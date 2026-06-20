import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import Records from '../../src/pages/Records'
import { render } from '../test-utils'

describe('Records', () => {
  it('renders records page with stats and badges', () => {
    render(<Records />)
    expect(screen.getByText(/累计闭关天数/)).toBeInTheDocument()
    expect(screen.getByText(/成就徽章/)).toBeInTheDocument()
  })
})
