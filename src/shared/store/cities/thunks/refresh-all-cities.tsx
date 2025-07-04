import { refreshCityComplete, refreshCityPending } from '@/store'

import type { AppThunk } from '../../store'

import { refreshCity } from './refresh-city'

export const refreshAllCities = (): AppThunk => {
  return async (dispatch, getState, { api }) => {
    const { cities } = getState().cities

    for (const city of cities) {
      try {
        dispatch(refreshCityPending({ cityId: city.id }))
        const updated = await api.getCity(city.name)
        dispatch(refreshCity(updated))
      } catch (err) {
        console.error(`Failed to update ${city.name}`, err)
      } finally {
        dispatch(refreshCityComplete())
      }
    }
  }
}
