import { describe, it, expect } from 'vitest'
import { getLevelDisplayName, getLevelNumber } from '../../src/utils/level'

describe('level display', () => {
  it('maps realm names to Lv.x', () => {
    expect(getLevelDisplayName('凡人')).toBe('Lv.1')
    expect(getLevelDisplayName('炼气')).toBe('Lv.2')
    expect(getLevelDisplayName('渡劫')).toBe('Lv.7')
  })

  it('returns level number', () => {
    expect(getLevelNumber('筑基')).toBe(3)
  })
})
