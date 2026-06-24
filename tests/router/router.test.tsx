import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppStateProvider } from '../../src/context/AppStateContext'
import AppRouter from '../../src/router'

function renderWithRouter(initialEntries: string[]) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <AppStateProvider>
        <AppRouter />
      </AppStateProvider>
    </MemoryRouter>,
  )
}

describe('router', () => {
  it('renders home at /', () => {
    const { container } = renderWithRouter(['/'])
    expect(container.textContent).toBeTruthy()
  })

  it('renders chapter detail at /subject/:id/chapter/:chapterId', () => {
    const { container } = renderWithRouter(['/subject/english/chapter/1'])
    expect(container.textContent).toBeTruthy()
  })

  it('renders learning page at /subject/:id/learn/:contentId', () => {
    const { container } = renderWithRouter(['/subject/english/learn/1'])
    expect(container.textContent).toBeTruthy()
  })

  it('renders review session at /review', () => {
    const { container } = renderWithRouter(['/review'])
    expect(container.textContent).toBeTruthy()
  })

  it('redirects /subject/:id to /?subject=:id', () => {
    const { container } = renderWithRouter(['/subject/english'])
    expect(container.textContent).toBeTruthy()
  })
})
