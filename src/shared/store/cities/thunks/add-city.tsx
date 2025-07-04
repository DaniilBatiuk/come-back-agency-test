import { toast } from 'react-toastify'

import { type AppThunk, fetchCityFailed, fetchCityPending, fetchCitySuccess } from '@/store'

export const addCity = (city: string): AppThunk => {
  return async (dispatch, _, { api }) => {
    dispatch(fetchCityPending())
    api
      .getCity(city)
      .then(res => dispatch(fetchCitySuccess(res)))
      .catch(() => {
        dispatch(fetchCityFailed())
        toast.error("City doesn't exist")
      })
  }
}
