import { Link, href } from 'react-router-dom'

import { kelvinToCelsius } from '@/helpers'

import { ROUTES } from '@/models'

import styles from './card.module.scss'
import { DeleteButton } from './components/delete-button/delete-button'
import { RefreshButton } from './components/refresh-button/refresh-button'

interface CardProps {
  city: {
    id: number
    name: string
    weather: {
      id: number
      main: string
      icon: string
    }[]
    main: {
      temp: number
    }
  }
}

export const Card: React.FC<CardProps> = ({ city }: CardProps) => {
  const imageUrl = `${import.meta.env.VITE_WEATHER_URL_ICON + city.weather[0].icon}.png`

  return (
    <div className={styles.card}>
      <p className={styles.card__name}>{city.name}</p>
      <img src={imageUrl} alt='Icon' className={styles.card__icon} />
      <p className={styles.card__temp}>{kelvinToCelsius(city.main.temp)}</p>
      <p className={styles.card__description}>{city.weather[0].main}</p>
      <DeleteButton cityId={city.id} />
      <RefreshButton city={city} />
      <Link to={href(ROUTES.CITY, { cityId: city.id.toString() })} className={styles.card__link}>
        more info
      </Link>
    </div>
  )
}
