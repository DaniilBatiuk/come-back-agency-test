type City = {
  id: number
  name: string
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  sys: {
    country: string
  }
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
}

type CityWeatherFor3Hours = {
  list: {
    main: {
      temp: number
    }
    weather: {
      id: number
      main: string
      icon: string
    }[]
    dt_txt: string
  }[]
}
