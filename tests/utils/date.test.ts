import { describe, it, expect } from 'vitest'
import { addDays, daysBetween } from '../../src/utils/date'

describe('date utils', () => {
  it('adds days correctly', () => {
    expect(addDays('2026-06-25', 1)).toBe('2026-06-26')
  })
  it('calculates days between', () => {
    expect(daysBetween('2026-06-25', '2026-08-25')).toBe(61)
  })
})
