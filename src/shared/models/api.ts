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
  }),
})

export const api = {
  getCity: (city: string) => {
    return fetch(
      `${import.meta.env.VITE_WEATHER_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_KEY}`,
    )
      .then(response => response.json())
      .then(res => {
        return CityDtoSchema.parse(res)
      })
  },
}
