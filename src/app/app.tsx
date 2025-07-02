import { Outlet } from 'react-router-dom'

import { Header, ToastWrapper, WrapperProvider } from '@/components/shared'

import styles from './app.module.scss'

export const App = () => {
  return (
    <div className={styles.wrapper} id='wrapper'>
      <Header />
      <div className={styles.main__container}>
        <WrapperProvider>
          <ToastWrapper>
            <Outlet />
          </ToastWrapper>
        </WrapperProvider>
      </div>
    </div>
  )
}
