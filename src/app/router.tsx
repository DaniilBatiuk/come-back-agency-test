import { createBrowserRouter, redirect } from 'react-router-dom'

import { Spinner } from '@/components/shared'

import { ROUTES } from '@/models'

import { App } from './app'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.CITIES,
        lazy: () => import('@/pages/cities/cities'),
        HydrateFallback: () => <Spinner />,
      },
      {
        path: ROUTES.CITY,
        lazy: () => import('@/pages/city/city'),
        HydrateFallback: () => <Spinner />,
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.CITIES),
      },
    ],
  },
])
