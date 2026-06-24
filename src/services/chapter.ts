import { CHAPTERS } from '../mocks/chapterData'
import type { Chapter, Progress, SubjectType } from '../types'

export function getChaptersBySubject(subject: SubjectType): Chapter[] {
  return CHAPTERS.filter((c) => c.subject === subject).sort((a, b) => a.order - b.order)
}

export function getChapterById(subject: SubjectType, chapterId: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.subject === subject && c.id === chapterId)
}

export function getChapterProgress(chapter: Chapter, progress: Progress): { completed: number; total: number } {
  const completed = chapter.contentIds.filter((id) => progress[chapter.subject].includes(id)).length
  return { completed, total: chapter.contentIds.length }
}

export function getChapterByContentId(subject: SubjectType, contentId: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.subject === subject && c.contentIds.includes(contentId))
}

export function isContentUnlocked(chapter: Chapter, contentId: string, progress: Progress): boolean {
  const index = chapter.contentIds.indexOf(contentId)
  if (index <= 0) return true
  return progress[chapter.subject].includes(chapter.contentIds[index - 1])
}
