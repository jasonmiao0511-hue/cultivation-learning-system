import { describe, it, expect } from 'vitest'
import type { Exercise, ReviewLog, Progress } from '../../src/types'

describe('extended types compile', () => {
  it('accepts history progress', () => {
    const p: Progress = { english: [], chinese: [], math: [], history: ['h1'], totalCultivation: 0, currentRealm: '凡人' }
    expect(p.history).toContain('h1')
  })

  it('accepts review log', () => {
    const log: ReviewLog = { contentId: 'e1', subject: 'english', stage: 1, nextReviewDate: '2026-06-26' }
    expect(log.stage).toBe(1)
  })

  it('accepts exercise', () => {
    const ex: Exercise = { id: 'ex1', type: 'choice', question: 'Q', options: ['A', 'B'], answer: 0 }
    expect(ex.type).toBe('choice')
  })
})
