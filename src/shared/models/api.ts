import { z } from 'zod'

const CityDtoSchema = z.object({
  id: z.number(),
  name: z.string(),
  weather: z
    .object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
    .array(),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    humidity: z.number(),
  }),
  sys: z.object({
    country: z.string(),
  }),
  wind: z.object({
    speed: z.number(),
    deg: z.number(),
  }),
  clouds: z.object({
    all: z.number(),
  }),
})

const getCityWeatherFor3HoursDtoSchema = z.object({
  list: z
    .object({
      main: z.object({
        temp: z.number(),
      }),
      weather: z
        .object({
          id: z.number(),
          main: z.string(),
          icon: z.string(),
        })
        .array(),
      dt_txt: z.string(),
    })
    .array(),
})

export const api = {
  getCity: (city: string) => {
    return fetch(
      `${import.meta.env.VITE_WEATHER_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_KEY}`,
    )
      .then(response => response.json())
      .then(res => CityDtoSchema.parse(res))
  },
  getCityWeatherFor3Hours: (city: string) => {
    return fetch(
      `${import.meta.env.VITE_WEATHER_FOR_3_HOURS_URL}?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_KEY}`,
    )
      .then(response => response.json())
      .then(res => getCityWeatherFor3HoursDtoSchema.parse(res))
  },
}
