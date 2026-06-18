import { describe, it, expect } from 'vitest'
import { generateId } from '../../src/utils/id'

describe('id utils', () => {
  it('generateId returns a string with the given prefix', () => {
    const id = generateId('task')
    expect(id.startsWith('task_')).toBe(true)
  })

  it('generateId uses default prefix "id"', () => {
    const id = generateId()
    expect(id.startsWith('id_')).toBe(true)
  })

  it('generateId returns unique values', () => {
    const id1 = generateId()
    const id2 = generateId()
    expect(id1).not.toBe(id2)
  })
})
