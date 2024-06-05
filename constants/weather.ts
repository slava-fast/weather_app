import { WeatherIcon } from '@/types/types';

export const WEATHER_NAMES: { [key: string]: string } = {
  SUNNY: 'sunny',
  PARTLY_CLOUDY: 'partlyCloudy',
  CLOUDY: 'cloudy',
  SNOW: 'snow',
  RAIN: 'rain',
  LIGHT_RAIN: 'lightRain',
  THUNDERSTORM: 'thunderstorm',
  ICE: 'ice',
  UNKNOWN: 'unknown'
}

export const WEATHER_BY_CODE: { [key: string]: WeatherIcon } = {
  '0': {
    name: WEATHER_NAMES.UNKNOWN,
    title: 'Unknown'
  },
  '1000': {
    name: WEATHER_NAMES.SUNNY,
    title: 'Clear, Sunny',
  },
  '1100': {
    name: WEATHER_NAMES.SUNNY,
    title: 'Mostly Clear',
  },
  '1101': {
    name: WEATHER_NAMES.PARTLY_CLOUDY,
    title: 'Partly Cloudy',
  },
  '1102': {
    name: WEATHER_NAMES.CLOUDY,
    title: 'Mostly Cloudy',
  },
  '1001': {
    name: WEATHER_NAMES.CLOUDY,
    title: 'Cloudy',
  },
  '2000': {
    name:  WEATHER_NAMES.CLOUDY,
    title: 'Fog',
  },
  '2100': {
    name:  WEATHER_NAMES.CLOUDY,
    title: 'Light Fog',
  },
  '4000': {
    name: WEATHER_NAMES.LIGHT_RAIN,
    title: 'Drizzle',
  },
  '4001': {
    name: WEATHER_NAMES.RAIN,
    title: 'Rain',
  },
  '4200': {
    name: WEATHER_NAMES.LIGHT_RAIN,
    title: 'Light Rain',
  },
  '4201': {
    name: WEATHER_NAMES.RAIN,
    title: 'Heavy Rain',
  },
  '5000': {
    name: WEATHER_NAMES.SNOW,
    title: 'Snow',
  },
  '5001': {
    name: WEATHER_NAMES.SNOW,
    title: 'Flurries',
  },
  '5100': {
    name: WEATHER_NAMES.SNOW,
    title: 'Light Snow',
  },
  '5101': {
    name: WEATHER_NAMES.SNOW,
    title: 'Heavy Snow',
  },
  '6000': {
    name: WEATHER_NAMES.RAIN,
    title: 'Freezing Drizzle',
  },
  '6001': {
    name: WEATHER_NAMES.RAIN,
    title: 'Freezing Rain',
  },
  '6200': {
    name: WEATHER_NAMES.RAIN,
    title: 'Light Freezing Rain',
  },
  '6201': {
    name: WEATHER_NAMES.RAIN,
    title: 'Heavy Freezing Rain',
  },
  '7000': {
    name: WEATHER_NAMES.ICE,
    title: 'Ice Pellets',
  },
  '7101': {
    name: WEATHER_NAMES.ICE,
    title: 'Heavy Ice Pellets',
  },
  '7102': {
    name: WEATHER_NAMES.ICE,
    title: 'Light Ice Pellets',
  },
  '8000': {
    name: WEATHER_NAMES.THUNDERSTORM,
    title: 'Thunderstorm',
  }
}
