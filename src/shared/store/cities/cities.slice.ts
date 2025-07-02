import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CityState {
  cities: City[]
  fetchCityStatus: 'idle' | 'pending' | 'success' | 'failed'
}

const initialState: CityState = {
  cities: [
    {
      id: 1,
      name: 'New York',
      weather: {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
      main: {
        temp: 284.2,
      },
    },
    {
      id: 2,
      name: 'London',
      weather: {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
      main: {
        temp: 284.2,
      },
    },
    {
      id: 3,
      name: 'Tokyo',
      weather: {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d',
      },
      main: {
        temp: 284.2,
      },
    },
    {
      id: 4,
      name: 'Paris',
      weather: {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d',
      },
      main: {
        temp: 284.2,
      },
    },
    {
      id: 5,
      name: 'Sydney',
      weather: {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13d',
      },
      main: {
        temp: 284.2,
      },
    },
  ],
  fetchCityStatus: 'idle',
}

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  selectors: {
    selectCities: state => state.cities,
    selectIsFetchCitiesPending: state => state.fetchCityStatus === 'pending',
    selectIsFetchCitiesIdle: state => state.fetchCityStatus === 'idle',
  },
  reducers: {
    fetchCitiesPending: state => {
      state.fetchCityStatus = 'pending'
    },
    fetchCitiesSuccess: (state, action: PayloadAction<City[]>) => {
      state.fetchCityStatus = 'success'
      state.cities = action.payload
    },
    fetchCitiesFailed: state => {
      state.fetchCityStatus = 'failed'
    },
  },
})
