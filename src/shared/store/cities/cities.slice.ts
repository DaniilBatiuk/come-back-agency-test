import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CityState {
  cities: City[]
  fetchCityStatus: 'idle' | 'pending' | 'success' | 'failed'
  refreshingCityId?: number | null
}

const initialState: CityState = {
  cities: [
    {
      id: 5128581,
      name: 'New York',
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      main: {
        temp: 284.2,
      },
    },
    {
      id: 2643743,
      name: 'London',
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      main: {
        temp: 284.2,
      },
    },
    {
      id: 1850144,
      name: 'Tokyo',
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      main: {
        temp: 284.2,
      },
    },
    {
      id: 2988507,
      name: 'Paris',
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      main: {
        temp: 284.2,
      },
    },
    {
      id: 2147714,
      name: 'Sydney',
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      main: {
        temp: 284.2,
      },
    },
  ],
  fetchCityStatus: 'idle',
  refreshingCityId: null,
}

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  selectors: {
    selectCities: state => state.cities,
    selectIsFetchCitiesPending: state => state.fetchCityStatus === 'pending',
    selectIsFetchCitiesIdle: state => state.fetchCityStatus === 'idle',
    selectCityByName: state => (name: string) => state.cities.find(city => city.name === name),
  },
  reducers: {
    fetchCityPending: state => {
      state.fetchCityStatus = 'pending'
    },
    fetchCitySuccess: (state, action: PayloadAction<City>) => {
      state.fetchCityStatus = 'success'
      state.cities = [...state.cities, action.payload]
    },
    fetchCityFailed: state => {
      state.fetchCityStatus = 'failed'
    },
    deleteCity: (state, action: PayloadAction<{ cityId: number }>) => {
      state.cities = state.cities.filter(city => city.id !== action.payload.cityId)
    },
    refreshCity: (state, action: PayloadAction<City>) => {
      state.cities = state.cities.map(city =>
        city.id === action.payload.id ? action.payload : city,
      )
    },
    refreshCityPending: (state, action: PayloadAction<{ cityId: number }>) => {
      state.refreshingCityId = action.payload.cityId
    },
    refreshCityComplete: state => {
      state.refreshingCityId = null
    },
  },
})
