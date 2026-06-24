import { describe, it, expect } from 'vitest'
import { HISTORY_TOPICS } from '../../src/mocks/historyData'

describe('history data', () => {
  it('has topics grouped into chapters', () => {
    const chapters = new Set(HISTORY_TOPICS.map((t) => t.chapter))
    expect(chapters.size).toBe(4)
    expect(HISTORY_TOPICS.length).toBeGreaterThanOrEqual(30)
    expect(HISTORY_TOPICS.every((t) => t.exercises.length > 0)).toBe(true)
  })
})
