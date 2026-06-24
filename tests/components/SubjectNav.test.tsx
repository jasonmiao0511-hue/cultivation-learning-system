import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SubjectNav from '../../src/components/feature/SubjectNav'

describe('SubjectNav', () => {
  it('switches subjects', () => {
    const onSelect = vi.fn()
    render(<SubjectNav activeSubject="chinese" onSelect={onSelect} />)
    fireEvent.click(screen.getByText('数学'))
    expect(onSelect).toHaveBeenCalledWith('math')
  })
})
