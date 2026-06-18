import { useState, useEffect } from 'react'
import type { Progress } from '../types'
import { loadProgress, saveProgress } from '../services/storage'
import { calculateRealm } from '../utils/realm'

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress())

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const completeContent = (subject: 'english' | 'chinese' | 'math', contentId: string, cultivation: number) => {
    setProgress((prev) => {
      if (prev[subject].includes(contentId)) return prev
      const next = { ...prev, [subject]: [...prev[subject], contentId] }
      next.totalCultivation = prev.totalCultivation + cultivation
      next.currentRealm = calculateRealm(next.totalCultivation).name
      return next
    })
  }

  return { progress, completeContent }
}
