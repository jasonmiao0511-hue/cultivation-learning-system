import { CHINESE_LESSONS } from '../mocks/chineseData'
import { MATH_TOPICS } from '../mocks/mathData'
import { ENGLISH_WORDS } from '../mocks/englishData'
import { HISTORY_TOPICS } from '../mocks/historyData'
import type { Exercise, SubjectType } from '../types'

export interface LearningContent {
  id: string
  subject: SubjectType
  title: string
  type?: string
  content: string
  explanation?: string
  appreciation?: string
  notes?: string[]
  example?: string
  exercises: Exercise[]
  meta?: Record<string, unknown>
}

const DATA_MAP: Record<SubjectType, unknown[]> = {
  chinese: CHINESE_LESSONS,
  math: MATH_TOPICS,
  english: ENGLISH_WORDS,
  history: HISTORY_TOPICS,
  custom: [],
}

export function getContent(subject: SubjectType, contentId: string): LearningContent | undefined {
  const raw = (DATA_MAP[subject] as Array<{ id: string }>).find((item) => item.id === contentId)
  if (!raw) return undefined

  if (subject === 'english') {
    const w = raw as typeof ENGLISH_WORDS[0]
    return {
      id: w.id,
      subject,
      title: w.word,
      type: w.group,
      content: `${w.word} ${w.phonetic} ${w.partOfSpeech} ${w.meaning}`,
      example: w.example,
      exercises: w.exercises,
      meta: { phonetic: w.phonetic, partOfSpeech: w.partOfSpeech, meaning: w.meaning },
    }
  }

  if (subject === 'math') {
    const t = raw as typeof MATH_TOPICS[0]
    return {
      id: t.id,
      subject,
      title: t.title,
      type: t.chapter,
      content: t.explanation,
      example: t.example,
      exercises: t.exercises ?? [],
    }
  }

  if (subject === 'history') {
    const t = raw as typeof HISTORY_TOPICS[0]
    return {
      id: t.id,
      subject,
      title: t.title,
      type: t.chapter,
      content: t.content,
      notes: t.notes,
      exercises: t.exercises,
    }
  }

  const l = raw as typeof CHINESE_LESSONS[0]
  return {
    id: l.id,
    subject,
    title: l.title,
    type: l.type,
    content: l.content,
    appreciation: l.appreciation,
    notes: l.notes,
    exercises: l.exercises,
  }
}
