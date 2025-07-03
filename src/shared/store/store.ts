import {
  type ThunkAction,
  type UnknownAction,
  configureStore,
  createSelector,
} from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'

import { api } from '@/models'

import { citiesSlice } from './cities/cities.slice'

const extraArgument = {
  api,
}

export const store = configureStore({
  reducer: {
    cities: citiesSlice.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: { extraArgument } }),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<R = void> = ThunkAction<R, AppState, typeof extraArgument, UnknownAction>

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<typeof store>()
export const createAppSelector = createSelector.withTypes<AppState>()
