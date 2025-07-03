import { type PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'

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
        feels_like: 282.5,
        humidity: 60,
      },
      sys: {
        country: 'US',
      },
      wind: {
        speed: 4.1,
        deg: 210,
      },
      clouds: {
        all: 0,
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
        temp: 280.4,
        feels_like: 278.6,
        humidity: 75,
      },
      sys: {
        country: 'GB',
      },
      wind: {
        speed: 3.6,
        deg: 180,
      },
      clouds: {
        all: 90,
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
        temp: 289.2,
        feels_like: 288.4,
        humidity: 55,
      },
      sys: {
        country: 'JP',
      },
      wind: {
        speed: 2.5,
        deg: 150,
      },
      clouds: {
        all: 40,
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
        temp: 285.6,
        feels_like: 284.1,
        humidity: 65,
      },
      sys: {
        country: 'FR',
      },
      wind: {
        speed: 3.0,
        deg: 200,
      },
      clouds: {
        all: 20,
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
        temp: 278.4,
        feels_like: 276.8,
        humidity: 80,
      },
      sys: {
        country: 'AU',
      },
      wind: {
        speed: 5.4,
        deg: 300,
      },
      clouds: {
        all: 75,
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
    selectCityById: createSelector(
      (state: CityState) => state.cities,
      (_: CityState, id: number) => id,
      (cities, id) => cities.find(city => city.id === id),
    ),
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
