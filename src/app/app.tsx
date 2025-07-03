import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header } from '@/components/shared'

import { store } from '@/store'

import styles from './app.module.scss'

export const App = () => {
  return (
    <div className={styles.wrapper} id='wrapper'>
      <Header />
      <div className={styles.main__container}>
        <Provider store={store}>
          <ToastContainer stacked /> <Outlet />
        </Provider>
      </div>
    </div>
  )
}
