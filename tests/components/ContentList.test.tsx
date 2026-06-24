import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ContentList from '../../src/components/feature/ContentList'
import type { Chapter, Progress } from '../../src/types'

const chapter: Chapter = {
  id: 'c1', subject: 'chinese', title: '古诗词', summary: '', objectives: [],
  contentIds: ['c_poem_1', 'c_poem_2'], order: 1,
}
const progress: Progress = { english: [], chinese: ['c_poem_1'], math: [], history: [], totalCultivation: 0, currentRealm: '凡人' }

describe('ContentList', () => {
  it('unlocks next item after first completed', () => {
    const onStart = vi.fn()
    render(<ContentList chapter={chapter} progress={progress} onStart={onStart} />)
    expect(screen.getByText('开始学习')).toBeInTheDocument()
    fireEvent.click(screen.getByText('开始学习'))
    expect(onStart).toHaveBeenCalledWith('c_poem_2')
  })
})
