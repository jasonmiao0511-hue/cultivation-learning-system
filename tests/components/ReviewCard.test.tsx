import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ReviewCard from '../../src/components/feature/ReviewCard'
import type { LearningContent } from '../../src/services/content'

const content: LearningContent = {
  id: 'e1', subject: 'english', title: 'classroom', type: '校园生活',
  content: 'classroom /ˈklɑːsruːm/ n. 教室', example: 'We study in the classroom.',
  exercises: [],
  meta: { meaning: '教室' },
}

describe('ReviewCard', () => {
  it('rates after reveal', () => {
    const onRate = vi.fn()
    render(<ReviewCard content={content} onRate={onRate} />)
    fireEvent.click(screen.getByText('显示答案'))
    fireEvent.click(screen.getByText('记住了'))
    expect(onRate).toHaveBeenCalledWith('good')
  })
})
