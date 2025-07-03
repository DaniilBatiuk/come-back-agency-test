import {
  type ThunkAction,
  type UnknownAction,
  configureStore,
  createSelector,
} from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { api } from '@/models'

import { citiesSlice } from './cities/cities.slice'

const extraArgument = {
  api,
}

const citiesPersistConfig = {
  key: 'cities',
  storage,
  whitelist: ['cities'],
}

const persistedCitiesReducer = persistReducer(citiesPersistConfig, citiesSlice.reducer)

export const store = configureStore({
  reducer: {
    cities: persistedCitiesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: { extraArgument },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<R = void> = ThunkAction<R, AppState, typeof extraArgument, UnknownAction>

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<typeof store>()
export const createAppSelector = createSelector.withTypes<AppState>()
