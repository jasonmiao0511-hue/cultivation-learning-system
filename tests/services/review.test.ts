import { describe, it, expect } from 'vitest'
import { scheduleNewReview, getDueReviews, updateReviewAfterRating } from '../../src/services/review'
import type { ReviewLog } from '../../src/types'

describe('review service', () => {
  it('schedules new review at stage 1', () => {
    const log = scheduleNewReview('e1', 'english', '2026-06-25')
    expect(log.stage).toBe(1)
    expect(log.nextReviewDate).toBe('2026-06-26')
  })

  it('returns due reviews', () => {
    const logs: ReviewLog[] = [
      { contentId: 'e1', subject: 'english', stage: 1, nextReviewDate: '2026-06-25' },
      { contentId: 'e2', subject: 'english', stage: 2, nextReviewDate: '2026-06-26' },
    ]
    const due = getDueReviews(logs, '2026-06-25')
    expect(due.length).toBe(1)
    expect(due[0].contentId).toBe('e1')
  })

  it('resets interval on forgot', () => {
    const log: ReviewLog = { contentId: 'e1', subject: 'english', stage: 3, nextReviewDate: '2026-06-25' }
    const updated = updateReviewAfterRating(log, 'forgot', '2026-06-25')
    expect(updated.stage).toBe(1)
    expect(updated.nextReviewDate).toBe('2026-06-26')
  })
})
