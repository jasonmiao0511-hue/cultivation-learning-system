import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { Routes, Route } from 'react-router-dom'
import { render } from '../test-utils'
import ChapterDetail from '../../src/pages/ChapterDetail'

describe('ChapterDetail', () => {
  it('renders chapter title', () => {
    render(
      <Routes>
        <Route path="/subject/:id/chapter/:chapterId" element={<ChapterDetail />} />
      </Routes>,
      { route: '/subject/chinese/chapter/chinese-poems' },
    )
    expect(screen.getByText('课内古诗词')).toBeInTheDocument()
  })
})
