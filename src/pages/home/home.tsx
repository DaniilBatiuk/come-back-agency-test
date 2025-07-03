import { AddForm } from './components/add-form/add-form'
import { CitiesList } from './components/cities-list/cities-list'
import styles from './home.module.scss'

function Cities() {
  return (
    <div className={styles.cities}>
      <AddForm />
      <CitiesList />
    </div>
  )
}

export const Component = Cities
