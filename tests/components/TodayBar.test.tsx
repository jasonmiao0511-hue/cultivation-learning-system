import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TodayBar from '../../src/components/feature/TodayBar'

describe('TodayBar', () => {
  it('shows stats', () => {
    render(<TodayBar completedTasks={2} totalTasks={5} streak={3} level="Lv.2" />)
    expect(screen.getByText('2 / 5')).toBeInTheDocument()
    expect(screen.getByText('3 天')).toBeInTheDocument()
    expect(screen.getByText('Lv.2')).toBeInTheDocument()
  })
})
