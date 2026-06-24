import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ChapterCard from '../../src/components/feature/ChapterCard'
import type { Chapter } from '../../src/types'

const chapter: Chapter = {
  id: 'c1',
  subject: 'chinese',
  title: '课内古诗词',
  summary: '必背古诗',
  objectives: [],
  contentIds: ['a', 'b'],
  order: 1,
}

describe('ChapterCard', () => {
  it('renders progress', () => {
    const onClick = vi.fn()
    render(<ChapterCard chapter={chapter} completed={1} total={2} onClick={onClick} />)
    expect(screen.getByText('课内古诗词')).toBeInTheDocument()
    expect(screen.getByText('1 / 2 完成')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
