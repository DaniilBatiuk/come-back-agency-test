import { citiesSlice, useAppSelector } from '@/store'

import styles from './cities-list.module.scss'
import { Card } from './components/card/card'

export const CitiesList: React.FC = () => {
  const Cities = useAppSelector(citiesSlice.selectors.selectCities)

  return (
    <section className={styles.list}>
      {Cities.map(city => (
        <Card key={city.id} city={city} />
      ))}
    </section>
  )
}
