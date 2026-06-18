import { describe, it, expect, vi } from 'vitest'
import { getToday, formatDate, addDays, daysBetween } from '../../src/utils/date'

describe('date utils', () => {
  it('getToday returns local date in YYYY-MM-DD format', () => {
    const mockDate = new Date(2026, 5, 18, 12, 0, 0) // June 18, 2026 12:00 local
    vi.setSystemTime(mockDate)
    expect(getToday()).toBe('2026-06-18')
    vi.useRealTimers()
  })

  it('formats date correctly', () => {
    expect(formatDate('2026-06-18')).toBe('6月18日')
    expect(formatDate('2026-01-05')).toBe('1月5日')
    expect(formatDate('2026-12-31')).toBe('12月31日')
  })

  it('adds days correctly', () => {
    expect(addDays('2026-06-25', 1)).toBe('2026-06-26')
    expect(addDays('2026-06-25', -1)).toBe('2026-06-24')
    expect(addDays('2026-06-30', 1)).toBe('2026-07-01')
  })

  it('calculates days between', () => {
    expect(daysBetween('2026-06-25', '2026-08-25')).toBe(61)
    expect(daysBetween('2026-06-25', '2026-06-25')).toBe(0)
    expect(daysBetween('2026-06-25', '2026-06-26')).toBe(1)
  })
})
