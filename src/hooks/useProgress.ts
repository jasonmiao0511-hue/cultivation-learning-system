import { useState, useEffect, useRef } from 'react'
import type { Progress } from '../types'
import { loadProgress, saveProgress } from '../services/storage'
import { calculateRealm } from '../utils/realm'

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress())
  const [newRealm, setNewRealm] = useState<string | null>(null)
  const previousRealm = useRef(progress.currentRealm)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  useEffect(() => {
    if (progress.currentRealm !== previousRealm.current && previousRealm.current !== '') {
      setNewRealm(progress.currentRealm)
    }
    previousRealm.current = progress.currentRealm
  }, [progress.currentRealm])

  const completeContent = (subject: 'english' | 'chinese' | 'math', contentId: string, cultivation: number) => {
    setProgress((prev) => {
      if (prev[subject].includes(contentId)) return prev
      const next = { ...prev, [subject]: [...prev[subject], contentId] }
      next.totalCultivation = prev.totalCultivation + cultivation
      next.currentRealm = calculateRealm(next.totalCultivation).name
      return next
    })
  }

  const acknowledgeRealmChange = () => setNewRealm(null)

  return { progress, completeContent, newRealm, acknowledgeRealmChange }
}
