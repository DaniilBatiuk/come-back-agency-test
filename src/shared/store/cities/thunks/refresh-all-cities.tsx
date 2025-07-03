import { type AppThunk, citiesSlice } from '@/store'

export const refreshAllCities = (): AppThunk => {
  return async (dispatch, getState, { api }) => {
    const { cities } = getState().cities

    for (const city of cities) {
      try {
        dispatch(citiesSlice.actions.refreshCityPending({ cityId: city.id }))
        const updated = await api.getCity(city.name)
        dispatch(citiesSlice.actions.refreshCity(updated))
      } catch (err) {
        console.error(`Failed to update ${city.name}`, err)
      } finally {
        dispatch(citiesSlice.actions.refreshCityComplete())
      }
    }
  }
}
