import { toast } from 'react-toastify'

import { type AppThunk, citiesSlice } from '@/store'

export const addCity = (city: string): AppThunk => {
  return async (dispatch, _, { api }) => {
    dispatch(citiesSlice.actions.fetchCityPending())
    api
      .getCity(city)
      .then(res => dispatch(citiesSlice.actions.fetchCitySuccess(res)))
      .catch(() => {
        dispatch(citiesSlice.actions.fetchCityFailed())
        toast.error("City doesn't exist")
      })
  }
}
