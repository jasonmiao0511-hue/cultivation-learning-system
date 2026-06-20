import { useState, useEffect } from 'react'
import type { DailyRecord } from '../types'
import { loadRecords, saveRecords } from '../services/storage'
import { getToday, addDays } from '../utils/date'

export function useRecords() {
  const [records, setRecords] = useState<Record<string, DailyRecord>>(() => loadRecords())

  useEffect(() => {
    saveRecords(records)
  }, [records])

  const updateRecord = (date: string, partial: Partial<DailyRecord>) => {
    setRecords((prev) => {
      const existing = prev[date]
      const defaults: DailyRecord = { date, tasks: [], totalDuration: 0, cultivation: 0, completedCount: 0, streakContinued: false }
      return {
        ...prev,
        [date]: { ...defaults, ...existing, ...partial, date },
      }
    })
  }

  const getRecord = (date: string): DailyRecord => {
    return records[date] || { date, tasks: [], totalDuration: 0, cultivation: 0, completedCount: 0, streakContinued: false }
  }

  const calculateStreak = (): number => {
    let streak = 0
    const today = getToday()
    for (let i = 0; i < 365; i++) {
      const dateStr = addDays(today, -i)
      const record = records[dateStr]
      if (record && record.completedCount > 0) {
        streak++
      } else if (i > 0) {
        break
      }
    }
    return streak
  }

  return { records, updateRecord, getRecord, calculateStreak }
}
