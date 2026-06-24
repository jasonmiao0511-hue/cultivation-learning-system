import { describe, it, expect } from 'vitest'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import { Routes, Route } from 'react-router-dom'
import { render } from '../test-utils'
import LearningPage from '../../src/pages/LearningPage'

describe('LearningPage', () => {
  it('renders content and allows completion', async () => {
    render(
      <Routes>
        <Route path="/subject/:id/learn/:contentId" element={<LearningPage />} />
      </Routes>,
      { route: '/subject/english/learn/e_school_1' },
    )
    expect(screen.getByRole('heading', { name: 'classroom' })).toBeInTheDocument()

    // Answer the fill-in exercise: type "教室"
    const fillInput = screen.getByPlaceholderText('请输入答案')
    fireEvent.change(fillInput, { target: { value: '教室' } })

    // Answer the choice exercise: click "classroom" (first option)
    // Use getAllByText because "classroom" appears as both title and choice option
    const classroomButtons = screen.getAllByText('classroom')
    // The second occurrence is the choice option button (first is the h1 title)
    fireEvent.click(classroomButtons[1])

    // Submit exercises
    fireEvent.click(screen.getByText('提交'))

    // Wait for "标记为已完成" button to be enabled
    await waitFor(() => expect(screen.getByText('标记为已完成')).not.toBeDisabled())
  })
})
