export interface Location {
  id: string;
  name: string;
  lat: number;
  lon: number;
  weather?: Weather[]
}

export interface Weather {
  date: string;
  day: string;
  night: string;
  weatherCode?: number;
}

export interface WeatherIcon {
  name: string;
  title: string;
}

export interface WeatherApiResponse {
  timelines: WeatherApiTimeline,
  location: WeatherApiLocation
}

interface WeatherApiTimeline {
  hourly: any;
  minutely: any;
  daily: WeatherApiDaily[];
}

interface WeatherApiLocation {
  lat: number;
  lon: number;
  name: string;
  type: string;
}

export interface WeatherApiDaily {
  time: string;
  values: WeatherApiDailyValue
}

interface WeatherApiDailyValue {
  sunriseTime: string;
  sunsetTime: string;
  temperatureMax: number;
  temperatureMin: number;
  temperatureAvg: number;
  weatherCodeMax: number;
}

export interface ParsedGoogleLocation {
  lat: string;
  lon: string;
  zoom: string;
}
