import { CircularProgress } from '@mui/material'

import styles from './spinner.module.scss'

export const Spinner: React.FC = () => {
  return (
    <div className={styles.spinner}>
      <CircularProgress />
    </div>
  )
}
