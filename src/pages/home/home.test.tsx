import { render, screen } from '@testing-library/react'

import { Component as Home } from './home'

jest.mock('./components/add-form/add-form', () => ({
  AddForm: () => <div data-testid='add-form-mock' />,
}))

jest.mock('./components/cities-list/cities-list', () => ({
  CitiesList: () => <div data-testid='cities-list-mock' />,
}))

describe('Home component', () => {
  it('renders root div with class "cities"', () => {
    const { container } = render(<Home />)
    const rootDiv = container.querySelector('div')
    expect(rootDiv).toBeInTheDocument()
    expect(rootDiv?.className).toMatch(/cities/)
  })

  it('renders AddForm component', () => {
    render(<Home />)
    expect(screen.getByTestId('add-form-mock')).toBeInTheDocument()
  })

  it('renders CitiesList component', () => {
    render(<Home />)
    expect(screen.getByTestId('cities-list-mock')).toBeInTheDocument()
  })
})
