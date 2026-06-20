import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AppStateProvider, useAppState } from '../../src/context/AppStateContext'

function ProgressReader() {
  const { progress } = useAppState()
  return <div data-testid="progress">{progress.totalCultivation}</div>
}

function ProgressSetter() {
  const { completeContent } = useAppState()
  return <button onClick={() => completeContent('english', 'e1', 10)}>完成任务</button>
}

describe('AppStateContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('shares progress state across components', () => {
    render(
      <AppStateProvider>
        <ProgressReader />
        <ProgressSetter />
      </AppStateProvider>,
    )
    expect(screen.getByTestId('progress').textContent).toBe('0')
    fireEvent.click(screen.getByText('完成任务'))
    expect(screen.getByTestId('progress').textContent).toBe('10')
  })
})
