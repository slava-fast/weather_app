import sql from 'better-sqlite3'

const db = sql('weather.db')

export function getLocations() {
  return db.prepare('SELECT * FROM locations').all()
}

export function getWeather(locations: any) {

}
