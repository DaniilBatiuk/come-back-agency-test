import { toast } from 'react-toastify'

import { type AppThunk, refreshCityComplete, refreshCityPending, refreshSingleCity } from '@/store'

export const refreshCity = (city: { name: string; id: number }): AppThunk => {
  return async (dispatch, _, { api }) => {
    dispatch(refreshCityPending({ cityId: city.id }))
    api
      .getCity(city.name)
      .then(res => {
        dispatch(refreshSingleCity(res))
        dispatch(refreshCityComplete())
      })
      .catch(() => {
        dispatch(refreshCityComplete())
        toast.error('Something went wrong')
      })
  }
}
