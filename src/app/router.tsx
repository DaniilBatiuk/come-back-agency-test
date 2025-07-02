import { createBrowserRouter, redirect } from 'react-router-dom'

import { Header } from '@/components/shared'

import { ROUTES } from '@/models'

import { App } from './app'

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <App />
      </>
    ),
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
