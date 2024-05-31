'use client'

import WeatherCardGrid from '@/components/weather-card-grid'
import { Location, WeatherApiResponse } from '@/types/types'
import Search from '@/components/search/search'
import { useEffect, useState } from 'react';

import { getWeatherForLocation } from '@/libs/weather'

import weatherApiResponse from './_response.json'
import { getLocations } from '@/libs/locations';

const API_KEY = ''
const WEATHER_API_URL = 'https://api.tomorrow.io/v4/weather/forecast'

const DUMMY_LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'Riva del Garda',
    lat: 45.889896559297625,
    lon: 10.842551359878453,
    weather: [
      {
        date: '24.05 Saturday',
        day: '+22',
        night: '+14'
      },
      {
        date: '25.05 Sunday',
        day: '+24',
        night: '+11'
      },
    ]
  },
  {
    id: '2',
    name: 'Cortina d\'Ampezzo',
    lat: 46.53743161710854,
    lon: 12.139051453339684,
    weather: [
      {
        date: '24.05 Saturday',
        day: '+22',
        night: '+14'
      },
      {
        date: '25.05 Sunday',
        day: '+24',
        night: '+11'
      },
    ]
  },
  {
    id: '3',
    name: 'Achensee',
    lat: 47.45866492109506,
    lon: 11.707921109069508,
    weather: [
      {
        date: '24.05 Saturday',
        day: '+22',
        night: '+14'
      },
      {
        date: '25.05 Sunday',
        day: '+24',
        night: '+11'
      },
    ]
  },
  {
    id: '4',
    name: 'Tegernsee',
    lat: 47.71415638955898,
    lon: 11.754208627605001,
    weather: [
      {
        date: '24.05 Saturday',
        day: '+22',
        night: '+14'
      },
      {
        date: '25.05 Sunday',
        day: '+24',
        night: '+11'
      },
    ]
  },
]

export default function Home() {
  const [nameSearch, setNameSearch] = useState('')
  const [locations, setLocations] = useState(DUMMY_LOCATIONS)

  let locationsToRender = locations;

  if (nameSearch.length >= 2) {
    locationsToRender = locations.filter(({ name }) =>
      name.toLocaleLowerCase().includes(nameSearch.toLocaleLowerCase()))
  }

  const onNameSearchChange = (search: string) => {
    setNameSearch(search)
  }

  useEffect(() => {
    // const promises = locations.map(({ lat, lon }: any) => fetch(
    //   `${WEATHER_API_URL}?location=${lat},${lon}&apikey=${API_KEY}`
    // ))

    // Promise.all(promises)
    //   .then(responses => {
    //     const parsedResponses = responses.map(response => response.json())
    //
    //     return Promise.all(parsedResponses)
    //   })
    Promise.resolve([weatherApiResponse, weatherApiResponse, weatherApiResponse, weatherApiResponse])
      .then(responses => {
        const filteredLocations = locations.map((location, index) => ({
          ...location,
          weather: getWeatherForLocation(responses[index]) || location.weather
        }))

        setLocations(filteredLocations)
      })
  }, [])

  return (
    <main className="container mx-auto">
      <div className="mb-10">
        <div className="flex">
          <Search onSearchChange={onNameSearchChange} />
          <button
            className="
              whitespace-nowrap
              ml-8
              p-2
              px-12
              bg-font-color
              text-white
              rounded-md
              text-3xl
            "
          >
            Add new location
          </button>
        </div>
      </div>
      <WeatherCardGrid locations={locationsToRender} />
    </main>
  )
}
