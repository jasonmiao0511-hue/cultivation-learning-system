import { createContext, useContext, useMemo } from 'react'
import type { CustomTask, DailyRecord, Progress, Task } from '../types'
import { useProgress } from '../hooks/useProgress'
import { useRecords } from '../hooks/useRecords'
import { useCustomTasks } from '../hooks/useCustomTasks'
import { useDailyTasks } from '../hooks/useDailyTasks'

interface AppState {
  progress: Progress
  completeContent: (subject: 'english' | 'chinese' | 'math', contentId: string, cultivation: number) => void
  newRealm: string | null
  acknowledgeRealmChange: () => void

  records: Record<string, DailyRecord>
  updateRecord: (date: string, partial: Partial<DailyRecord>) => void
  getRecord: (date: string) => DailyRecord
  calculateStreak: () => number

  customTasks: CustomTask[]
  addCustomTask: (task: Omit<CustomTask, 'id'>) => void
  removeCustomTask: (id: string) => void

  tasks: Task[]
}

const AppStateContext = createContext<AppState | null>(null)

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const progressState = useProgress()
  const recordsState = useRecords()
  const customTasksState = useCustomTasks()
  const tasks = useDailyTasks(progressState.progress, customTasksState.customTasks)

  const value = useMemo(
    () => ({
      ...progressState,
      ...recordsState,
      ...customTasksState,
      tasks,
    }),
    [progressState, recordsState, customTasksState, tasks],
  )

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

export function useAppState(): AppState {
  const ctx = useContext(AppStateContext)
  if (!ctx) {
    throw new Error('useAppState must be used within AppStateProvider')
  }
  return ctx
}
