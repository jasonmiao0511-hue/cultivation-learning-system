import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppStateProvider } from '../src/context/AppStateContext'

export function render(ui: React.ReactElement, { route = '/' } = {}) {
  return rtlRender(
    <MemoryRouter initialEntries={[route]}>
      <AppStateProvider>{ui}</AppStateProvider>
    </MemoryRouter>,
  )
}
