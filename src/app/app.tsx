import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'

import { Header } from '@/components/shared'

import { persistor, store } from '@/store'

import styles from './app.module.scss'

export const App = () => {
  return (
    <div className={styles.wrapper} id='wrapper'>
      <Header />
      <div className={styles.main__container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastContainer stacked /> <Outlet />
          </PersistGate>
        </Provider>
      </div>
    </div>
  )
}
