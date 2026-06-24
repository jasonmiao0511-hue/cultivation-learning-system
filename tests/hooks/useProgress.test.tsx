import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useProgress } from '../../src/hooks/useProgress'

describe('useProgress', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('starts with default progress', () => {
    const { result } = renderHook(() => useProgress())
    expect(result.current.progress.currentRealm).toBe('凡人')
    expect(result.current.progress.totalCultivation).toBe(0)
  })

  it('completes content and increases cultivation', () => {
    const { result } = renderHook(() => useProgress())
    act(() => {
      result.current.completeContent('english', 'e1', 10)
    })
    expect(result.current.progress.english).toContain('e1')
    expect(result.current.progress.totalCultivation).toBe(10)
  })

  it('does not duplicate completed content', () => {
    const { result } = renderHook(() => useProgress())
    act(() => {
      result.current.completeContent('english', 'e1', 10)
      result.current.completeContent('english', 'e1', 10)
    })
    expect(result.current.progress.english).toEqual(['e1'])
    expect(result.current.progress.totalCultivation).toBe(10)
  })

  it('detects realm change', () => {
    const { result } = renderHook(() => useProgress())
    act(() => {
      result.current.completeContent('english', 'e1', 80)
    })
    expect(result.current.progress.currentRealm).toBe('炼气')
    expect(result.current.newRealm).toBe('炼气')
  })

  it('acknowledges realm change', () => {
    const { result } = renderHook(() => useProgress())
    act(() => {
      result.current.completeContent('english', 'e1', 80)
    })
    act(() => {
      result.current.acknowledgeRealmChange()
    })
    expect(result.current.newRealm).toBeNull()
  })

  it('completes history content', () => {
    const { result } = renderHook(() => useProgress())
    act(() => {
      result.current.completeContent('history', 'h1', 10)
    })
    expect(result.current.progress.history).toContain('h1')
  })
})
