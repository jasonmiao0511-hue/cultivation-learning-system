import { describe, it, expect, beforeEach } from 'vitest'
import { loadProgress, saveProgress, loadRecords, loadCustomTasks, exportData, importData } from '../../src/services/storage'

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns default progress when empty', () => {
    const progress = loadProgress()
    expect(progress.currentRealm).toBe('凡人')
    expect(progress.totalCultivation).toBe(0)
  })

  it('saves and loads progress', () => {
    const progress = { english: ['e1'], chinese: [], math: [], totalCultivation: 100, currentRealm: '炼气' }
    saveProgress(progress)
    expect(loadProgress().totalCultivation).toBe(100)
  })

  it('exports and imports data', () => {
    saveProgress({ english: ['e1'], chinese: [], math: [], totalCultivation: 100, currentRealm: '炼气' })
    const json = exportData()
    localStorage.clear()
    importData(json)
    expect(loadProgress().currentRealm).toBe('炼气')
  })

  it('returns default progress when localStorage has malformed JSON', () => {
    localStorage.setItem('cultivation-progress', 'not-json')
    const progress = loadProgress()
    expect(progress.currentRealm).toBe('凡人')
    expect(progress.totalCultivation).toBe(0)
  })

  it('returns empty records when localStorage has malformed JSON', () => {
    localStorage.setItem('daily-records', 'not-json')
    expect(loadRecords()).toEqual({})
  })

  it('returns empty customTasks when localStorage has malformed JSON', () => {
    localStorage.setItem('custom-tasks', 'not-json')
    expect(loadCustomTasks()).toEqual([])
  })

  it('throws clear error on importData with invalid JSON', () => {
    expect(() => importData('not-json')).toThrow('Invalid JSON data')
  })

  it('rejects import with invalid progress shape', () => {
    expect(() => importData(JSON.stringify({ progress: { totalCultivation: 'lots' } }))).toThrow('Invalid progress data')
  })

  it('rejects import with invalid records shape', () => {
    expect(() => importData(JSON.stringify({ records: { '2026-06-25': { completedCount: 'one' } } }))).toThrow('Invalid records data')
  })

  it('rejects import with invalid custom tasks shape', () => {
    expect(() => importData(JSON.stringify({ customTasks: [{ name: 123 }] }))).toThrow('Invalid custom tasks data')
  })

  it('round-trips records and custom tasks', () => {
    const records = { '2026-06-25': { date: '2026-06-25', tasks: [], totalDuration: 30, cultivation: 20, completedCount: 2, streakContinued: true } }
    const customTasks = [{ id: 'c1', name: '跑步', duration: 20, priority: 'high' as const, repeatRule: 'daily' as const }]
    localStorage.setItem('daily-records', JSON.stringify(records))
    localStorage.setItem('custom-tasks', JSON.stringify(customTasks))
    const json = exportData()
    localStorage.clear()
    importData(json)
    expect(loadRecords()).toEqual(records)
    expect(loadCustomTasks()).toEqual(customTasks)
  })
})
