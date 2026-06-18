import { describe, it, expect } from 'vitest'
import { generateDailyPlan } from '../../src/services/schedule'

const emptyProgress = { english: [], chinese: [], math: [], totalCultivation: 0, currentRealm: '凡人' }

describe('generateDailyPlan', () => {
  it('generates tasks for day 1', () => {
    const tasks = generateDailyPlan('2026-06-25', emptyProgress, [])
    expect(tasks.length).toBeGreaterThan(0)
    expect(tasks.some((t) => t.subject === 'english')).toBe(true)
    expect(tasks.some((t) => t.subject === 'chinese')).toBe(true)
    expect(tasks.some((t) => t.subject === 'math')).toBe(true)
  })

  it('marks completed english words', () => {
    const tasks = generateDailyPlan('2026-06-25', { english: ['e_school_1'], chinese: [], math: [], totalCultivation: 0, currentRealm: '凡人' }, [])
    const wordTask = tasks.find((t) => t.contentId === 'e_school_1')
    expect(wordTask?.completed).toBe(true)
  })
})
