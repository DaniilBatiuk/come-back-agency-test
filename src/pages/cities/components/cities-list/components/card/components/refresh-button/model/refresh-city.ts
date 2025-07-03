import { toast } from 'react-toastify'

import { type AppThunk, citiesSlice } from '@/store'

export const refreshCity = (city: { name: string; id: number }): AppThunk => {
  return async (dispatch, _, { api }) => {
    dispatch(citiesSlice.actions.refreshCityPending({ cityId: city.id }))
    api
      .getCity(city.name)
      .then(res => {
        dispatch(citiesSlice.actions.refreshCity(res))
        dispatch(citiesSlice.actions.refreshCityComplete())
      })
      .catch(() => {
        dispatch(citiesSlice.actions.refreshCityComplete())
        toast.error('Something went wrong')
      })
  }
}
