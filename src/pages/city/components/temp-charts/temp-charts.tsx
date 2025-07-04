import { LineChart } from '@mui/x-charts/LineChart'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Spinner } from '@/components/shared'

import { api } from '@/models'

import { ConvertWeatherChartData } from './helpers/convert-weather-chart-data/convert-weather-chart-data'
import styles from './temp-charts.module.scss'

interface TempChartsProps {
  city: {
    name: string
  }
}

export const TempCharts: React.FC<TempChartsProps> = ({ city }: TempChartsProps) => {
  const [chartsData, setChartsData] = useState<CityWeatherFor3Hours | null>(null)

  useEffect(() => {
    api
      .getCityWeatherFor3Hours(city.name)
      .then(res => setChartsData(res))
      .catch(() => {
        toast.error('Something went wrong')
      })
  }, [])

  if (!chartsData) return <Spinner />

  const { xLabels, temperatures } = ConvertWeatherChartData(chartsData)

  return (
    <section className={styles.charts}>
      <LineChart
        xAxis={[{ scaleType: 'point', data: xLabels, label: 'Time' }]}
        series={[{ data: temperatures, label: 'Temperature °C', area: true }]}
        height={300}
        margin={{ left: -20 }}
      />
    </section>
  )
}
