import 'react-router-dom'

export const ROUTES = {
  HOME: '/',
  CITIES: '/cities',
  CITY: '/cities/:cityId',
} as const

export type PathParams = {
  [ROUTES.CITY]: {
    cityId: string
  }
}

declare module 'react-router-dom' {
  interface Register {
    params: PathParams
  }
}
