import type { CustomTask, DailyRecord, Progress } from '../types'

const KEYS = {
  progress: 'cultivation-progress',
  records: 'daily-records',
  customTasks: 'custom-tasks',
}

export function loadProgress(): Progress {
  const raw = localStorage.getItem(KEYS.progress)
  if (!raw) {
    return { english: [], chinese: [], math: [], totalCultivation: 0, currentRealm: '凡人' }
  }
  try {
    return JSON.parse(raw) as Progress
  } catch {
    return { english: [], chinese: [], math: [], totalCultivation: 0, currentRealm: '凡人' }
  }
}

export function saveProgress(progress: Progress): void {
  localStorage.setItem(KEYS.progress, JSON.stringify(progress))
}

export function loadRecords(): Record<string, DailyRecord> {
  const raw = localStorage.getItem(KEYS.records)
  if (!raw) return {}
  try {
    return JSON.parse(raw) as Record<string, DailyRecord>
  } catch {
    return {}
  }
}

export function saveRecords(records: Record<string, DailyRecord>): void {
  localStorage.setItem(KEYS.records, JSON.stringify(records))
}

export function loadCustomTasks(): CustomTask[] {
  const raw = localStorage.getItem(KEYS.customTasks)
  if (!raw) return []
  try {
    return JSON.parse(raw) as CustomTask[]
  } catch {
    return []
  }
}

export function saveCustomTasks(tasks: CustomTask[]): void {
  localStorage.setItem(KEYS.customTasks, JSON.stringify(tasks))
}

export function exportData(): string {
  const data = {
    progress: loadProgress(),
    records: loadRecords(),
    customTasks: loadCustomTasks(),
  }
  return JSON.stringify(data, null, 2)
}

export function importData(json: string): void {
  let data: unknown
  try {
    data = JSON.parse(json)
  } catch {
    throw new Error('Invalid JSON data')
  }
  if (data && typeof data === 'object') {
    const d = data as Record<string, unknown>
    if (d.progress) saveProgress(d.progress as Progress)
    if (d.records) saveRecords(d.records as Record<string, DailyRecord>)
    if (d.customTasks) saveCustomTasks(d.customTasks as CustomTask[])
  }
}
