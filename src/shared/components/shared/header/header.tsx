import { Link } from 'react-router-dom'

import { ROUTES } from '@/models'

import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={ROUTES.CITIES} className={styles.header__left}>
          <img src='logo.png' alt='logo' className={styles.header__logo} />
          <p className={styles.header__text}>Come Back Agency Test</p>
        </Link>
      </div>
    </header>
  )
}
