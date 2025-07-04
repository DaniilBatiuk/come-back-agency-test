import { render, screen } from '@testing-library/react'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '@/store'

import { Component as City } from './city'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  Navigate: ({ to, replace }: { to: string; replace: boolean }) => (
    <div data-testid='navigate' data-to={to} data-replace={replace.toString()}>
      Navigate to {to}
    </div>
  ),
}))

jest.mock('@/store', () => ({
  useAppSelector: jest.fn(),
  citiesSlice: {
    selectors: {
      selectCityById: jest.fn(),
    },
  },
}))

jest.mock('@/models', () => ({
  ROUTES: {
    HOME: '/',
  },
}))

jest.mock('./components/city-info/city-info', () => ({
  CityInfo: ({ city }: { city: any }) => (
    <div data-testid='city-info'>
      CityInfo for {city.name} (ID: {city.id})
    </div>
  ),
}))

jest.mock('./components/temp-charts/temp-charts', () => ({
  TempCharts: ({ city }: { city: any }) => (
    <div data-testid='temp-charts'>
      TempCharts for {city.name} (ID: {city.id})
    </div>
  ),
}))

interface MockCity {
  id: number
  name: string
  temperature?: number
}

const mockUseParams = useParams as jest.MockedFunction<typeof useParams>
const mockUseAppSelector = useAppSelector as jest.MockedFunction<typeof useAppSelector>

describe('City Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Navigation scenarios', () => {
    it('redirects to home when city is not found', () => {
      mockUseParams.mockReturnValue({ cityId: '123' })
      mockUseAppSelector.mockReturnValue(null)

      render(<City />)

      const navigate = screen.getByTestId('navigate')
      expect(navigate).toBeInTheDocument()
      expect(navigate).toHaveAttribute('data-to', '/')
      expect(navigate).toHaveAttribute('data-replace', 'true')
    })
  })

  describe('Successful rendering scenarios', () => {
    const mockCity: MockCity = {
      id: 123,
      name: 'Test City',
      temperature: 25,
    }

    it('renders city info and temp charts when city exists', () => {
      mockUseParams.mockReturnValue({ cityId: '123' })
      mockUseAppSelector.mockReturnValue(mockCity)

      render(<City />)

      expect(screen.getByTestId('city-info')).toBeInTheDocument()
      expect(screen.getByTestId('temp-charts')).toBeInTheDocument()
      expect(screen.getByText('CityInfo for Test City (ID: 123)')).toBeInTheDocument()
      expect(screen.getByText('TempCharts for Test City (ID: 123)')).toBeInTheDocument()
    })

    it('passes correct city data to child components', () => {
      mockUseParams.mockReturnValue({ cityId: '456' })
      mockUseAppSelector.mockReturnValue({
        id: 456,
        name: 'Another City',
        temperature: 30,
      })

      render(<City />)

      expect(screen.getByText('CityInfo for Another City (ID: 456)')).toBeInTheDocument()
      expect(screen.getByText('TempCharts for Another City (ID: 456)')).toBeInTheDocument()
    })
  })
})
