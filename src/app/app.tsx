import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header } from '@/components/shared'

import { refreshAllCities, useAppDispatch } from '@/store'

import styles from './app.module.scss'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(refreshAllCities())
  }, [])

  return (
    <div className={styles.wrapper} id='wrapper'>
      <Header />
      <div className={styles.main__container}>
        <ToastContainer stacked />
        <Outlet />
      </div>
    </div>
  )
}
