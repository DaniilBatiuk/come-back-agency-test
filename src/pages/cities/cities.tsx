import styles from './cities.module.scss'
import { AddForm } from './components/add-form/add-form'
import { CitiesList } from './components/cities-list/cities-list'

function Cities() {
  return (
    <div className={styles.cities}>
      {/* Cities
      <Link to={href(ROUTES.CITY, { cityId: '1' })}>Hi</Link> */}
      <AddForm />
      <CitiesList />
    </div>
  )
}

export const Component = Cities
