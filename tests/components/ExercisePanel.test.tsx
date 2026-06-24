import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ExercisePanel from '../../src/components/feature/ExercisePanel'
import type { Exercise } from '../../src/types'

const exercises: Exercise[] = [
  { id: 'ex1', type: 'choice', question: '2+2=?', options: ['3', '4', '5'], answer: 1 },
]

describe('ExercisePanel', () => {
  it('calls onComplete when all correct', () => {
    const onComplete = vi.fn()
    render(<ExercisePanel exercises={exercises} onComplete={onComplete} />)
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('提交'))
    expect(onComplete).toHaveBeenCalled()
  })
})
