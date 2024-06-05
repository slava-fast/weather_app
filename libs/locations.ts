import sql from 'better-sqlite3'
import weatherApiResponse from '@/app/_response.json';
import { getWeatherForLocation } from '@/libs/weather';
import { WeatherApiResponse, Location } from '@/types/types';

const db = sql('weather.db')

export function getLocations(): Location[] {
  return db.prepare('SELECT * FROM locations').all() as Location[]
}

export function storeLocation(name: string, lat: string, lon: string) {
  db.prepare(`
    INSERT INTO locations (name, lat, lon)
    VALUES (?, ?, ?)
  `).run(name, lat, lon)
}

export function deleteLocation(locationId: string) {
  db.prepare(`
    DELETE FROM locations WHERE id = (?)
  `).run(locationId)
}

export async function getWeather(locations: Location[]): Promise<WeatherApiResponse[]> {
  // const promises = locations.map(({ lat, lon }: any) => fetch(
  //   `${process.env.WEATHER_API_URL}?location=${lat},${lon}&apikey=${process.env.WEATHER_API_KEY}`
  // ))
  //
  // return Promise.all(promises)
  //   .then(responses => {
  //     const parsedResponses = responses.map(response => response.json())
  //
  //     console.log(parsedResponses);
  //
  //     return Promise.all(parsedResponses)
  //   })

  return Promise.resolve(Array(locations.length).fill(weatherApiResponse))
}

export function enrichLocationsWithWeather(locations: Location[], weather: WeatherApiResponse[]): Location[] {
  return locations.map((location, index) => ({
    ...location,
    weather: getWeatherForLocation(weather[index])
  }))
}
