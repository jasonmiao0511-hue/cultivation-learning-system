import { describe, it, expect, beforeEach } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import { render } from '../test-utils'
import ReviewSession from '../../src/pages/ReviewSession'

describe('ReviewSession', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('shows completed message when queue is empty', () => {
    render(<ReviewSession />, { route: '/review' })
    expect(screen.getByText('今日复习已完成 🎉')).toBeInTheDocument()
    expect(screen.getByText('明天再来吧')).toBeInTheDocument()
  })

  it('shows review queue count and renders ReviewCard when items are due', () => {
    const today = new Date().toISOString().slice(0, 10)
    const reviewLogs = [
      { contentId: 'e_school_1', subject: 'english', stage: 1, nextReviewDate: today },
    ]
    localStorage.setItem('review-logs', JSON.stringify(reviewLogs))

    render(<ReviewSession />, { route: '/review' })
    expect(screen.getByText(/剩余 1 项/)).toBeInTheDocument()
    expect(screen.getByText('显示答案')).toBeInTheDocument()
  })

  it('updates remaining count after rating', () => {
    const today = new Date().toISOString().slice(0, 10)
    const reviewLogs = [
      { contentId: 'e_school_1', subject: 'english', stage: 1, nextReviewDate: today },
    ]
    localStorage.setItem('review-logs', JSON.stringify(reviewLogs))

    render(<ReviewSession />, { route: '/review' })
    fireEvent.click(screen.getByText('显示答案'))
    fireEvent.click(screen.getByText('太简单了'))
    expect(screen.getByText('今日复习已完成 🎉')).toBeInTheDocument()
  })
})
