import { Weather, WeatherApiDaily, WeatherApiResponse, WeatherIcon } from '@/types/types';

const INVALID_DATE = 'Invalid Date'

const formatDate = (date: string): string => {
  const constructedDate: Date = new Date(date)

  if (constructedDate.toString() === INVALID_DATE) {
    return INVALID_DATE
  }

  return constructedDate.toLocaleDateString('ru-RU').toString().slice(0, -4)
}

const round = (number: number, step: number): number => Math.round(number / step) * step

const formatTemperature = (temperature: number): string => {
  const roundedTemperature = round(temperature, 1)

  return roundedTemperature > 0 ? `+${roundedTemperature}` : `${roundedTemperature}`
}

const transformApiDayPayload = (weatherDaily: WeatherApiDaily, day: string): Weather => {
  return ({
    date: formatDate(weatherDaily.time) + ` ${day}`,
    day: formatTemperature(weatherDaily.values.temperatureMax),
    night: formatTemperature(weatherDaily.values.temperatureMin),
    weatherCode: weatherDaily.values.weatherCodeMax,
  })
}

const getWeatherForLocation = (weather: WeatherApiResponse): Weather[] => {
  const weekendWeather = weather.timelines?.daily.filter(dailyWeather => {
    const day = new Date(dailyWeather.time).getDay()

    return day === 6 || day === 0
  })

  if (weekendWeather?.length !== 2) {
    return []
  }


  return ([
    transformApiDayPayload(weekendWeather[0], 'Saturday'),
    transformApiDayPayload(weekendWeather[1], 'Sunday')
  ])
}

export { getWeatherForLocation }
