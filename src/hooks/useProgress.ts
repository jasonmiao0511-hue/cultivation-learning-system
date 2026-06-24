import { useState, useEffect, useRef } from 'react'
import type { Progress, SubjectType } from '../types'
import { loadProgress, saveProgress, loadReviewLogs, saveReviewLogs } from '../services/storage'
import { calculateRealm } from '../utils/realm'
import { scheduleNewReview, updateReviewAfterRating } from '../services/review'
import type { ReviewRating } from '../services/review'

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress())
  const [reviewLogs, setReviewLogs] = useState(() => loadReviewLogs())
  const [newRealm, setNewRealm] = useState<string | null>(null)
  const previousRealm = useRef(progress.currentRealm)

  useEffect(() => { saveProgress(progress) }, [progress])
  useEffect(() => { saveReviewLogs(reviewLogs) }, [reviewLogs])

  useEffect(() => {
    if (progress.currentRealm !== previousRealm.current && previousRealm.current !== '') {
      setNewRealm(progress.currentRealm)
    }
    previousRealm.current = progress.currentRealm
  }, [progress.currentRealm])

  const completeContent = (subject: SubjectType, contentId: string, cultivation: number) => {
    if (subject === 'custom') return
    setProgress((prev) => {
      if (prev[subject].includes(contentId)) return prev
      const next = { ...prev, [subject]: [...prev[subject], contentId] }
      next.totalCultivation = prev.totalCultivation + cultivation
      next.currentRealm = calculateRealm(next.totalCultivation).name
      return next
    })
    setReviewLogs((prev) => {
      if (prev.some((log) => log.contentId === contentId)) return prev
      return [...prev, scheduleNewReview(contentId, subject, new Date().toISOString().slice(0, 10))]
    })
  }

  const rateReview = (contentId: string, rating: ReviewRating) => {
    const today = new Date().toISOString().slice(0, 10)
    setReviewLogs((prev) =>
      prev.map((log) => (log.contentId === contentId ? updateReviewAfterRating(log, rating, today) : log)),
    )
  }

  const acknowledgeRealmChange = () => setNewRealm(null)

  return { progress, reviewLogs, completeContent, rateReview, newRealm, acknowledgeRealmChange }
}
