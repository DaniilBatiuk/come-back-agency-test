import { kelvinToCelsius } from '@/helpers'

import styles from './city-info.module.scss'

interface CityInfoProps {
  city: City
}

export const CityInfo: React.FC<CityInfoProps> = ({ city }: CityInfoProps) => {
  const imageUrl = `${import.meta.env.VITE_WEATHER_URL_ICON + city.weather[0].icon}.png`

  return (
    <section className={styles.info}>
      <h1>{city.name}</h1>
      <p className={styles.info__temp}>{kelvinToCelsius(city.main.temp)}</p>
      <img src={imageUrl} alt='Icon' className={styles.info__icon} />
      <div className={styles.info__list}>
        <div className={styles.info__list_item}>
          <p>Weather</p>
          <p>{city.weather[0].main}</p>
        </div>
        <div className={styles.info__list_item}>
          <p>Desctiption</p>
          <p>{city.weather[0].description}</p>
        </div>
        <div className={styles.info__list_item}>
          <p>Feels like</p>
          <p>{kelvinToCelsius(city.main.feels_like)}°</p>
        </div>
        <div className={styles.info__list_item}>
          <p>Country</p>
          <p>{city.sys.country}</p>
        </div>
        <div className={styles.info__list_item}>
          <p>Humidity</p>
          <p>{city.main.humidity}%</p>
        </div>
        <div className={styles.info__list_item}>
          <p>Wind</p>
          <p>{city.wind.deg}°</p>
        </div>
        <div className={styles.info__list_item}>
          <p>Wind spped</p>
          <p>{city.wind.speed}</p>
        </div>
        <div className={styles.info__list_item}>
          <p>Cloudiness</p>
          <p>{city.clouds.all}%</p>
        </div>
      </div>
    </section>
  )
}
