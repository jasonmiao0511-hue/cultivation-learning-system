import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCustomTasks } from '../../src/hooks/useCustomTasks'

describe('useCustomTasks', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('starts with empty tasks', () => {
    const { result } = renderHook(() => useCustomTasks())
    expect(result.current.customTasks).toEqual([])
  })

  it('adds a custom task', () => {
    const { result } = renderHook(() => useCustomTasks())
    act(() => {
      result.current.addCustomTask({ name: '跳绳', duration: 10, priority: 'medium', repeatRule: 'daily' })
    })
    expect(result.current.customTasks).toHaveLength(1)
    expect(result.current.customTasks[0].name).toBe('跳绳')
  })

  it('assigns dayOfWeek for weekly tasks', () => {
    const { result } = renderHook(() => useCustomTasks())
    act(() => {
      result.current.addCustomTask({ name: '游泳', duration: 30, priority: 'medium', repeatRule: 'weekly' })
    })
    expect(typeof result.current.customTasks[0].dayOfWeek).toBe('number')
  })

  it('removes a custom task', () => {
    const { result } = renderHook(() => useCustomTasks())
    act(() => {
      result.current.addCustomTask({ name: '跳绳', duration: 10, priority: 'medium', repeatRule: 'daily' })
    })
    const id = result.current.customTasks[0].id
    act(() => {
      result.current.removeCustomTask(id)
    })
    expect(result.current.customTasks).toHaveLength(0)
  })
})
