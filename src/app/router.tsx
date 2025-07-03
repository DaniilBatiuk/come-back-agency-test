import { createBrowserRouter } from 'react-router-dom'

import { Spinner } from '@/components/shared'

import { ROUTES } from '@/models'

import { App } from './app'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import('@/pages/home/home'),
        HydrateFallback: () => <Spinner />,
      },
      {
        path: ROUTES.CITY,
        lazy: () => import('@/pages/city/city'),
        HydrateFallback: () => <Spinner />,
      },
    ],
  },
])
