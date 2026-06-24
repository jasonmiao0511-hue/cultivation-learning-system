import type { CustomTask, DailyRecord, Progress, ReviewLog } from '../types'

const KEYS = {
  progress: 'cultivation-progress',
  records: 'daily-records',
  customTasks: 'custom-tasks',
  reviewLogs: 'review-logs',
}

const DEFAULT_PROGRESS: Progress = { english: [], chinese: [], math: [], history: [], totalCultivation: 0, currentRealm: '凡人' }

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((v) => typeof v === 'string')
}

function isValidProgress(value: unknown): value is Progress {
  if (!value || typeof value !== 'object') return false
  const p = value as Record<string, unknown>
  return (
    isStringArray(p.english) &&
    isStringArray(p.chinese) &&
    isStringArray(p.math) &&
    isStringArray(p.history) &&
    typeof p.totalCultivation === 'number' &&
    typeof p.currentRealm === 'string'
  )
}

function isValidDailyRecord(value: unknown): value is DailyRecord {
  if (!value || typeof value !== 'object') return false
  const r = value as Record<string, unknown>
  return (
    typeof r.date === 'string' &&
    typeof r.totalDuration === 'number' &&
    typeof r.cultivation === 'number' &&
    typeof r.completedCount === 'number' &&
    typeof r.streakContinued === 'boolean'
  )
}

function isValidRecords(value: unknown): value is Record<string, DailyRecord> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  const r = value as Record<string, unknown>
  return Object.values(r).every(isValidDailyRecord)
}

function isValidPriority(value: unknown): value is 'low' | 'medium' | 'high' {
  return value === 'low' || value === 'medium' || value === 'high'
}

function isValidRepeatRule(value: unknown): value is 'none' | 'daily' | 'weekly' {
  return value === 'none' || value === 'daily' || value === 'weekly'
}

function isValidCustomTask(value: unknown): value is CustomTask {
  if (!value || typeof value !== 'object') return false
  const t = value as Record<string, unknown>
  return (
    typeof t.id === 'string' &&
    typeof t.name === 'string' &&
    typeof t.duration === 'number' &&
    isValidPriority(t.priority) &&
    isValidRepeatRule(t.repeatRule) &&
    (t.dayOfWeek === undefined || typeof t.dayOfWeek === 'number')
  )
}

function isValidCustomTasks(value: unknown): value is CustomTask[] {
  return Array.isArray(value) && value.every(isValidCustomTask)
}

function isValidReviewLog(value: unknown): value is ReviewLog {
  if (!value || typeof value !== 'object') return false
  const l = value as Record<string, unknown>
  return (
    typeof l.contentId === 'string' &&
    typeof l.subject === 'string' &&
    typeof l.stage === 'number' &&
    typeof l.nextReviewDate === 'string'
  )
}

function isValidReviewLogs(value: unknown): value is ReviewLog[] {
  return Array.isArray(value) && value.every(isValidReviewLog)
}

export function loadProgress(): Progress {
  const raw = localStorage.getItem(KEYS.progress)
  if (!raw) return DEFAULT_PROGRESS
  try {
    const parsed = JSON.parse(raw) as unknown
    return isValidProgress(parsed) ? parsed : DEFAULT_PROGRESS
  } catch {
    return DEFAULT_PROGRESS
  }
}

export function saveProgress(progress: Progress): void {
  try {
    localStorage.setItem(KEYS.progress, JSON.stringify(progress))
  } catch (e) {
    console.error('Failed to save progress', e)
  }
}

export function loadRecords(): Record<string, DailyRecord> {
  const raw = localStorage.getItem(KEYS.records)
  if (!raw) return {}
  try {
    const parsed = JSON.parse(raw) as unknown
    return isValidRecords(parsed) ? parsed : {}
  } catch {
    return {}
  }
}

export function saveRecords(records: Record<string, DailyRecord>): void {
  try {
    localStorage.setItem(KEYS.records, JSON.stringify(records))
  } catch (e) {
    console.error('Failed to save records', e)
  }
}

export function loadCustomTasks(): CustomTask[] {
  const raw = localStorage.getItem(KEYS.customTasks)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as unknown
    return isValidCustomTasks(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveCustomTasks(tasks: CustomTask[]): void {
  try {
    localStorage.setItem(KEYS.customTasks, JSON.stringify(tasks))
  } catch (e) {
    console.error('Failed to save custom tasks', e)
  }
}

export function loadReviewLogs(): ReviewLog[] {
  const raw = localStorage.getItem(KEYS.reviewLogs)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as unknown
    return isValidReviewLogs(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveReviewLogs(logs: ReviewLog[]): void {
  try {
    localStorage.setItem(KEYS.reviewLogs, JSON.stringify(logs))
  } catch (e) {
    console.error('Failed to save review logs', e)
  }
}

export function exportData(): string {
  const data = {
    progress: loadProgress(),
    records: loadRecords(),
    customTasks: loadCustomTasks(),
    reviewLogs: loadReviewLogs(),
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
  if (!data || typeof data !== 'object') {
    throw new Error('Backup must be an object')
  }
  const d = data as Record<string, unknown>
  if (d.progress && !isValidProgress(d.progress)) throw new Error('Invalid progress data')
  if (d.records && !isValidRecords(d.records)) throw new Error('Invalid records data')
  if (d.customTasks && !isValidCustomTasks(d.customTasks)) throw new Error('Invalid custom tasks data')
  if (d.reviewLogs && !isValidReviewLogs(d.reviewLogs)) throw new Error('Invalid review logs data')
  if (d.progress) saveProgress(d.progress)
  if (d.records) saveRecords(d.records)
  if (d.customTasks) saveCustomTasks(d.customTasks)
  if (d.reviewLogs) saveReviewLogs(d.reviewLogs)
}
