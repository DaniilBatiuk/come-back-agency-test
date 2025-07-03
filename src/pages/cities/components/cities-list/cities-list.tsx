import { citiesSlice, useAppSelector } from '@/store'

import styles from './cities-list.module.scss'
import { Card } from './components/card/card'

export const CitiesList: React.FC = () => {
  const Cities = useAppSelector(citiesSlice.selectors.selectCities)

  if (Cities.length === 0) {
    return <div className={styles.list__empty}>No cities</div>
  }

  return (
    <section className={styles.list}>
      {Cities.toReversed().map(city => (
        <Card key={city.id} city={city} />
      ))}
    </section>
  )
}
