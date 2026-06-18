import { describe, it, expect, beforeEach } from 'vitest'
import { loadProgress, saveProgress, exportData, importData } from '../../src/services/storage'

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
})
