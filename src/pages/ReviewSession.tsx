import { useMemo } from 'react'
import { useAppState } from '../context/AppStateContext'
import { getContent } from '../services/content'
import { getDueReviews } from '../services/review'
import { getToday } from '../utils/date'
import ReviewCard from '../components/feature/ReviewCard'
import type { ReviewRating } from '../services/review'

export default function ReviewSession() {
  const { reviewLogs, rateReview } = useAppState()
  const today = getToday()
  const due = useMemo(() => getDueReviews(reviewLogs, today), [reviewLogs, today])
  const current = due[0]
  const content = current ? getContent(current.subject, current.contentId) : undefined

  const handleRate = (rating: ReviewRating) => {
    if (!current) return
    rateReview(current.contentId, rating)
  }

  if (!current) {
    return (
      <div className="card text-center">
        <h2 className="text-xl font-bold">今日复习已完成 🎉</h2>
        <p className="mt-2 text-slate-400">明天再来吧</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center text-slate-400">剩余 {due.length} 项</div>
      {content && <ReviewCard content={content} onRate={handleRate} />}
    </div>
  )
}
