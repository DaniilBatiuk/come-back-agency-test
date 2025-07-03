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
  }
}
