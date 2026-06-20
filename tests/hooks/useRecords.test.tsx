import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useRecords } from '../../src/hooks/useRecords'
import { vi } from 'vitest'

describe('useRecords', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('starts with empty records', () => {
    const { result } = renderHook(() => useRecords())
    expect(result.current.records).toEqual({})
  })

  it('updates record with defaults', () => {
    const { result } = renderHook(() => useRecords())
    act(() => {
      result.current.updateRecord('2026-06-25', { completedCount: 1 })
    })
    const record = result.current.getRecord('2026-06-25')
    expect(record.completedCount).toBe(1)
    expect(record.totalDuration).toBe(0)
    expect(record.cultivation).toBe(0)
  })

  it('calculates streak for consecutive days including today', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 5, 25))
    const { result } = renderHook(() => useRecords())
    act(() => {
      result.current.updateRecord('2026-06-25', { completedCount: 1 })
      result.current.updateRecord('2026-06-24', { completedCount: 1 })
      result.current.updateRecord('2026-06-23', { completedCount: 1 })
    })
    expect(result.current.calculateStreak()).toBe(3)
  })

  it('continues streak when today is empty but yesterday completed', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 5, 25))
    const { result } = renderHook(() => useRecords())
    act(() => {
      result.current.updateRecord('2026-06-24', { completedCount: 1 })
      result.current.updateRecord('2026-06-23', { completedCount: 1 })
    })
    expect(result.current.calculateStreak()).toBe(2)
  })

  it('breaks streak when yesterday is empty', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 5, 25))
    const { result } = renderHook(() => useRecords())
    act(() => {
      result.current.updateRecord('2026-06-23', { completedCount: 1 })
    })
    expect(result.current.calculateStreak()).toBe(0)
  })
})
