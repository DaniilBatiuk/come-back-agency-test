import { ConvertWeatherChartData } from './convert-weather-chart-data'

describe('ConvertWeatherChartData', () => {
  const sampleData = {
    list: [
      {
        dt_txt: '2025-07-04 00:00:00',
        main: { temp: 280 },
        weather: [{ id: 800, main: 'Clear', icon: '01d' }],
      },
      {
        dt_txt: '2025-07-04 03:00:00',
        main: { temp: 282 },
        weather: [{ id: 801, main: 'Clouds', icon: '02d' }],
      },
      {
        dt_txt: '2025-07-04 06:00:00',
        main: { temp: 285 },
        weather: [{ id: 802, main: 'Clouds', icon: '03d' }],
      },
      {
        dt_txt: '2025-07-04 09:00:00',
        main: { temp: 290 },
        weather: [{ id: 803, main: 'Clouds', icon: '04d' }],
      },
      {
        dt_txt: '2025-07-04 12:00:00',
        main: { temp: 295 },
        weather: [{ id: 804, main: 'Clouds', icon: '04d' }],
      },
      {
        dt_txt: '2025-07-04 15:00:00',
        main: { temp: 300 },
        weather: [{ id: 500, main: 'Rain', icon: '10d' }],
      },
      {
        dt_txt: '2025-07-04 18:00:00',
        main: { temp: 298 },
        weather: [{ id: 501, main: 'Rain', icon: '10d' }],
      },
      {
        dt_txt: '2025-07-04 21:00:00',
        main: { temp: 294 },
        weather: [{ id: 502, main: 'Rain', icon: '10n' }],
      },
      {
        dt_txt: '2025-07-05 00:00:00',
        main: { temp: 289 },
        weather: [{ id: 800, main: 'Clear', icon: '01n' }],
      },
    ],
  }

  it('returns xLabels and temperatures for first 8 data points', () => {
    const result = ConvertWeatherChartData(sampleData)
    expect(result.xLabels.length).toBe(8)
    expect(result.temperatures.length).toBe(8)
  })

  it('correctly formats xLabels as HH:MM in en-US locale', () => {
    const result = ConvertWeatherChartData(sampleData)
    expect(result.xLabels).toEqual([
      '12:00 AM',
      '03:00 AM',
      '06:00 AM',
      '09:00 AM',
      '12:00 PM',
      '03:00 PM',
      '06:00 PM',
      '09:00 PM',
    ])
  })

  it('returns correct temperatures from data points', () => {
    const result = ConvertWeatherChartData(sampleData)
    expect(result.temperatures).toEqual([280, 282, 285, 290, 295, 300, 298, 294])
  })

  it('handles empty list', () => {
    const emptyData = { list: [] }
    const result = ConvertWeatherChartData(emptyData)
    expect(result.xLabels).toEqual([])
    expect(result.temperatures).toEqual([])
  })
})
