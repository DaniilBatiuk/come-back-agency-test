import { render, screen } from '@testing-library/react'

import { App } from './app'

jest.mock('@/components/shared', () => ({
  Header: () => <div data-testid='header'>Header</div>,
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div data-testid='outlet'>Outlet</div>,
}))

jest.mock('react-toastify', () => ({
  ToastContainer: () => <div data-testid='toast-container'>Toast</div>,
}))

const mockDispatch = jest.fn()
jest.mock('@/store', () => ({
  useAppDispatch: () => mockDispatch,
  refreshAllCities: jest.fn(() => ({ type: 'REFRESH' })),
}))

describe('App', () => {
  beforeEach(() => {
    mockDispatch.mockClear()
  })

  it('dispatches refreshAllCities on mount', () => {
    render(<App />)
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'REFRESH' })
  })

  it('renders Header, ToastContainer, and Outlet', () => {
    render(<App />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('toast-container')).toBeInTheDocument()
    expect(screen.getByTestId('outlet')).toBeInTheDocument()
  })

  it('renders wrapper and main container divs', () => {
    const { container } = render(<App />)
    const wrapper = container.querySelector('#wrapper')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper?.className).toMatch(/wrapper/)
  })
})
