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

  it('generates review tasks based on Ebbinghaus intervals', () => {
    const tasks = generateDailyPlan('2026-06-26', emptyProgress, [])
    const reviewTasks = tasks.filter((t) => t.type === 'review')
    expect(reviewTasks.length).toBeGreaterThan(0)
  })

  it('includes weekend trial on Saturday', () => {
    const tasks = generateDailyPlan('2026-06-27', emptyProgress, [])
    expect(tasks.some((t) => t.title.includes('宗门试炼'))).toBe(true)
  })

  it('includes daily custom tasks', () => {
    const customTasks = [{ id: 'c1', name: '跳绳', duration: 10, priority: 'medium' as const, repeatRule: 'daily' as const }]
    const tasks = generateDailyPlan('2026-06-25', emptyProgress, customTasks)
    expect(tasks.some((t) => t.title === '跳绳')).toBe(true)
  })

  it('includes weekly custom task only on matching day', () => {
    const customTasks = [{ id: 'c1', name: '游泳', duration: 30, priority: 'medium' as const, repeatRule: 'weekly' as const, dayOfWeek: 4 }]
    const thursdayTasks = generateDailyPlan('2026-06-25', emptyProgress, customTasks)
    expect(thursdayTasks.some((t) => t.title === '游泳')).toBe(true)
    const fridayTasks = generateDailyPlan('2026-06-26', emptyProgress, customTasks)
    expect(fridayTasks.some((t) => t.title === '游泳')).toBe(false)
  })

  it('generates different content for day 62', () => {
    const tasks = generateDailyPlan('2026-08-25', emptyProgress, [])
    expect(tasks.some((t) => t.subject === 'english')).toBe(true)
    expect(tasks.some((t) => t.subject === 'chinese')).toBe(true)
    expect(tasks.some((t) => t.subject === 'math')).toBe(true)
  })
})
