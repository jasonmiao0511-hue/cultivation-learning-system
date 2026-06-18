export type SubjectType = 'english' | 'chinese' | 'math' | 'custom'
export type TaskType = 'learn' | 'review' | 'practice'
export type Priority = 'low' | 'medium' | 'high'

export interface Task {
  id: string
  title: string
  subject: SubjectType
  type: TaskType
  duration: number
  priority: Priority
  repeatRule?: 'none' | 'daily' | 'weekly'
  completed: boolean
  completedAt?: string
  source: 'auto' | 'manual' | 'temp'
  contentId?: string
}

export interface DailyRecord {
  date: string
  tasks: Task[]
  totalDuration: number
  cultivation: number
  completedCount: number
  streakContinued: boolean
}

export interface Progress {
  english: string[]
  chinese: string[]
  math: string[]
  totalCultivation: number
  currentRealm: string
}

export interface CustomTask {
  id: string
  name: string
  duration: number
  priority: Priority
  repeatRule: 'none' | 'daily' | 'weekly'
}

export interface VocabWord {
  id: string
  word: string
  phonetic: string
  partOfSpeech: string
  meaning: string
  example: string
  group: string
}
