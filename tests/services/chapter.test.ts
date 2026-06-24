import { describe, it, expect } from 'vitest'
import { getChaptersBySubject, getChapterById, getChapterProgress, isContentUnlocked } from '../../src/services/chapter'
import type { Progress } from '../../src/types'

describe('chapter service', () => {
  const progress: Progress = { english: [], chinese: ['c_poem_1'], math: [], history: [], totalCultivation: 0, currentRealm: '凡人' }

  it('returns chapters for chinese', () => {
    const chapters = getChaptersBySubject('chinese')
    expect(chapters.length).toBe(7)
    expect(chapters[0].subject).toBe('chinese')
  })

  it('returns chapters for math', () => {
    const chapters = getChaptersBySubject('math')
    expect(chapters.length).toBe(6)
    expect(chapters[0].subject).toBe('math')
  })

  it('returns chapters for english', () => {
    const chapters = getChaptersBySubject('english')
    expect(chapters.length).toBe(12)
    expect(chapters[0].subject).toBe('english')
  })

  it('returns chapters for history', () => {
    const chapters = getChaptersBySubject('history')
    expect(chapters.length).toBe(4)
    expect(chapters[0].subject).toBe('history')
  })

  it('calculates chapter progress', () => {
    const chapters = getChaptersBySubject('chinese')
    const poemChapter = chapters.find((c) => c.id === 'chinese-poems')!
    const p = getChapterProgress(poemChapter, progress)
    expect(p.total).toBe(poemChapter.contentIds.length)
    expect(p.completed).toBe(1)
  })

  it('unlocks first content only by default', () => {
    const chapters = getChaptersBySubject('chinese')
    const poemChapter = chapters.find((c) => c.id === 'chinese-poems')!
    const emptyProgress: Progress = { english: [], chinese: [], math: [], history: [], totalCultivation: 0, currentRealm: '凡人' }
    expect(isContentUnlocked(poemChapter, poemChapter.contentIds[0], emptyProgress)).toBe(true)
    expect(isContentUnlocked(poemChapter, poemChapter.contentIds[1], emptyProgress)).toBe(false)
  })

  it('unlocks content when previous is completed', () => {
    const chapters = getChaptersBySubject('chinese')
    const poemChapter = chapters.find((c) => c.id === 'chinese-poems')!
    const fullProgress: Progress = { english: [], chinese: ['c_poem_1'], math: [], history: [], totalCultivation: 0, currentRealm: '凡人' }
    expect(isContentUnlocked(poemChapter, poemChapter.contentIds[1], fullProgress)).toBe(true)
  })

  it('finds chapter by id', () => {
    const chapter = getChapterById('chinese', 'chinese-poems')
    expect(chapter).toBeDefined()
    expect(chapter?.title).toBe('课内古诗词')
  })

  it('returns undefined for unknown chapter id', () => {
    const chapter = getChapterById('chinese', 'nonexistent')
    expect(chapter).toBeUndefined()
  })

  it('chapters are sorted by order', () => {
    const chapters = getChaptersBySubject('chinese')
    for (let i = 1; i < chapters.length; i++) {
      expect(chapters[i].order).toBeGreaterThanOrEqual(chapters[i - 1].order)
    }
  })
})
