import { type PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'

import { mockCities } from './mock-cities'

export interface CityState {
  cities: City[]
  fetchCityStatus: 'idle' | 'pending' | 'success' | 'failed'
  refreshingCityId?: number | null
}

const initialState: CityState = {
  cities: mockCities,
  fetchCityStatus: 'idle',
  refreshingCityId: null,
}

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  selectors: {
    selectCities: state => state.cities,
    selectRefreshingCityId: state => state.refreshingCityId,
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
    refreshSingleCity: (state, action: PayloadAction<City>) => {
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
