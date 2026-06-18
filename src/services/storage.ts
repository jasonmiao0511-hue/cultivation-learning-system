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
  return JSON.parse(raw) as Progress
}

export function saveProgress(progress: Progress): void {
  localStorage.setItem(KEYS.progress, JSON.stringify(progress))
}

export function loadRecords(): Record<string, DailyRecord> {
  const raw = localStorage.getItem(KEYS.records)
  if (!raw) return {}
  return JSON.parse(raw) as Record<string, DailyRecord>
}

export function saveRecords(records: Record<string, DailyRecord>): void {
  localStorage.setItem(KEYS.records, JSON.stringify(records))
}

export function loadCustomTasks(): CustomTask[] {
  const raw = localStorage.getItem(KEYS.customTasks)
  if (!raw) return []
  return JSON.parse(raw) as CustomTask[]
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
  const data = JSON.parse(json)
  if (data.progress) saveProgress(data.progress)
  if (data.records) saveRecords(data.records)
  if (data.customTasks) saveCustomTasks(data.customTasks)
}
