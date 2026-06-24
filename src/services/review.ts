import { addDays } from '../utils/date'
import type { ReviewLog, SubjectType } from '../types'

const INTERVALS = [1, 2, 4, 7, 15]

export type ReviewRating = 'forgot' | 'hard' | 'good' | 'easy'

export function scheduleNewReview(contentId: string, subject: SubjectType, date: string): ReviewLog {
  return {
    contentId,
    subject,
    stage: 1,
    nextReviewDate: addDays(date, INTERVALS[0]),
  }
}

export function getDueReviews(reviewLogs: ReviewLog[], date: string): ReviewLog[] {
  return reviewLogs.filter((log) => log.nextReviewDate <= date)
}

export function updateReviewAfterRating(log: ReviewLog, rating: ReviewRating, date: string): ReviewLog {
  let nextStage = log.stage

  if (rating === 'forgot') {
    nextStage = 1
  } else if (rating === 'hard') {
    nextStage = Math.min(log.stage, INTERVALS.length)
  } else if (rating === 'good') {
    nextStage = Math.min(log.stage + 1, INTERVALS.length)
  } else if (rating === 'easy') {
    nextStage = Math.min(log.stage + 2, INTERVALS.length)
  }

  const intervalIndex = Math.min(nextStage - 1, INTERVALS.length - 1)
  const interval = INTERVALS[intervalIndex]

  return {
    ...log,
    stage: nextStage,
    lastReviewDate: date,
    nextReviewDate: addDays(date, interval),
  }
}
