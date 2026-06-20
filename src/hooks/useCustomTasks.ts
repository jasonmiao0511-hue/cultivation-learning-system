import { useState, useEffect } from 'react'
import type { CustomTask } from '../types'
import { loadCustomTasks, saveCustomTasks } from '../services/storage'
import { generateId } from '../utils/id'
import { getToday } from '../utils/date'

export function useCustomTasks() {
  const [customTasks, setCustomTasks] = useState<CustomTask[]>(() => loadCustomTasks())

  useEffect(() => {
    saveCustomTasks(customTasks)
  }, [customTasks])

  const addCustomTask = (task: Omit<CustomTask, 'id'>) => {
    const enriched: CustomTask = {
      ...task,
      id: generateId('custom'),
      dayOfWeek: task.repeatRule === 'weekly' ? new Date(getToday()).getDay() : undefined,
    }
    setCustomTasks((prev) => [...prev, enriched])
  }

  const removeCustomTask = (id: string) => {
    setCustomTasks((prev) => prev.filter((t) => t.id !== id))
  }

  return { customTasks, addCustomTask, removeCustomTask }
}
