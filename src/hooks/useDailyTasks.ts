import { useMemo } from 'react'
import type { Progress, CustomTask } from '../types'
import { generateDailyPlan } from '../services/schedule'
import { getToday } from '../utils/date'

export function useDailyTasks(progress: Progress, customTasks: CustomTask[]) {
  return useMemo(() => {
    return generateDailyPlan(getToday(), progress, customTasks)
  }, [progress, customTasks])
}
