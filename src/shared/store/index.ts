import { citiesSlice } from './cities/cities.slice'

export * from './cities/cities.slice'
export * from './cities/thunks/add-city'
export * from './cities/thunks/refresh-all-cities'
export * from './cities/thunks/refresh-city'
export * from './store'

export const selectCities = citiesSlice.selectors.selectCities
export const selectRefreshingCityId = citiesSlice.selectors.selectRefreshingCityId
export const selectCityById = citiesSlice.selectors.selectCityById
export const selectIsFetchCitiesPending = citiesSlice.selectors.selectIsFetchCitiesPending

export const fetchCityPending = citiesSlice.actions.fetchCityPending
export const fetchCitySuccess = citiesSlice.actions.fetchCitySuccess
export const fetchCityFailed = citiesSlice.actions.fetchCityFailed
export const refreshCityPending = citiesSlice.actions.refreshCityPending
export const refreshCityComplete = citiesSlice.actions.refreshCityComplete
export const deleteCity = citiesSlice.actions.deleteCity
export const refreshSingleCity = citiesSlice.actions.refreshSingleCity
