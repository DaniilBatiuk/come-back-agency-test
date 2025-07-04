import { kelvinToCelsius } from './kelvin-to-celsius'

describe('kelvinToCelsius', () => {
  it('should convert 0 Kelvin to -273 Celsius', () => {
    expect(kelvinToCelsius(0)).toBe(-273)
  })

  it('should convert 273.15 Kelvin to 0 Celsius', () => {
    expect(kelvinToCelsius(273.15)).toBe(0)
  })

  it('should convert 300 Kelvin to 27 Celsius', () => {
    expect(kelvinToCelsius(300)).toBe(27)
  })

  it('should round to nearest integer', () => {
    expect(kelvinToCelsius(273.6)).toBe(0)
    expect(kelvinToCelsius(273.7)).toBe(1)
    expect(kelvinToCelsius(273.4)).toBe(0)
  })
})
