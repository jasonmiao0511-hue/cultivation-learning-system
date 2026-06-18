import { useState, useEffect } from 'react'
import type { CustomTask } from '../types'
import { loadCustomTasks, saveCustomTasks } from '../services/storage'
import { generateId } from '../utils/id'

export function useCustomTasks() {
  const [customTasks, setCustomTasks] = useState<CustomTask[]>(() => loadCustomTasks())

  useEffect(() => {
    saveCustomTasks(customTasks)
  }, [customTasks])

  const addCustomTask = (task: Omit<CustomTask, 'id'>) => {
    setCustomTasks((prev) => [...prev, { ...task, id: generateId('custom') }])
  }

  const removeCustomTask = (id: string) => {
    setCustomTasks((prev) => prev.filter((t) => t.id !== id))
  }

  return { customTasks, addCustomTask, removeCustomTask }
}
