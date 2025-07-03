import { Navigate, useParams } from 'react-router-dom'

import { citiesSlice, useAppSelector } from '@/store'

import { ROUTES } from '@/models'

import { CityInfo } from './components/city-info/city-info'
import { TempCharts } from './components/temp-charts/temp-charts'

function City() {
  const { cityId } = useParams<{ cityId: string }>()

  const city = useAppSelector(state =>
    citiesSlice.selectors.selectCityById(state, cityId ? +cityId : 0),
  )

  if (!cityId) {
    return <Navigate to={ROUTES.HOME} replace />
  }

  if (!city) {
    return <Navigate to={ROUTES.HOME} replace />
  }

  return (
    <div>
      <CityInfo city={city} />
      <TempCharts city={city} />
    </div>
  )
}

export const Component = City
