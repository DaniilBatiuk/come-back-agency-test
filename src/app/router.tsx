import { createBrowserRouter, redirect } from 'react-router-dom'

import { ROUTES } from '@/models'

import { App } from './app'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.CITIES,
        lazy: () => import('@/pages/cities/cities'),
      },
      {
        path: ROUTES.CITY,
        lazy: () => import('@/pages/city/city'),
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.CITIES),
      },
    ],
  },
])
