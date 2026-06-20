import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import English from '../../src/pages/subject/English'
import { render } from '../test-utils'

describe('English', () => {
  it('renders english subject page', () => {
    render(<English />)
    expect(screen.getByText(/英语功法/)).toBeInTheDocument()
  })
})
