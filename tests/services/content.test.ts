import { describe, it, expect } from 'vitest'
import { getContent } from '../../src/services/content'

describe('content service', () => {
  it('finds english word', () => {
    const c = getContent('english', 'e_school_1')!
    expect(c.title).toBe('classroom')
    expect(c.exercises.length).toBeGreaterThan(0)
  })

  it('finds chinese poem', () => {
    const c = getContent('chinese', 'c_poem_1')!
    expect(c.subject).toBe('chinese')
  })

  it('finds history topic', () => {
    const c = getContent('history', 'h_pre_1')!
    expect(c.subject).toBe('history')
  })
})
