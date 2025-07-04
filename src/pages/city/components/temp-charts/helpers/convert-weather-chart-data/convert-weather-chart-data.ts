export const ConvertWeatherChartData = (chartsData: CityWeatherFor3Hours) => {
  const dataPoints = chartsData.list.slice(0, 8)

  const xLabels = dataPoints.map(point => {
    const time = new Date(point.dt_txt).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
    return time
  })

  const temperatures = dataPoints.map(point => point.main.temp)

  return { xLabels, temperatures }
}
