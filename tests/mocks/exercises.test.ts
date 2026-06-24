import { describe, it, expect } from 'vitest'
import { CHINESE_LESSONS } from '../../src/mocks/chineseData'
import { MATH_TOPICS } from '../../src/mocks/mathData'
import { ENGLISH_WORDS } from '../../src/mocks/englishData'

describe('content exercises', () => {
  it('chinese lessons have exercises', () => {
    expect(CHINESE_LESSONS.every((l) => (l.exercises?.length ?? 0) > 0)).toBe(true)
  })

  it('math topics have exercises', () => {
    expect(MATH_TOPICS.every((t) => (t.exercises?.length ?? 0) > 0)).toBe(true)
  })

  it('english words have exercises', () => {
    expect(ENGLISH_WORDS.every((w) => (w.exercises?.length ?? 0) > 0)).toBe(true)
  })
})
