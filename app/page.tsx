import WeatherCardGrid from '@/components/weather-card-grid';
import { Location } from '@/types/types';

const DUMMY_LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'Riva del Garda',
    lat: 23,
    lon: 12,
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
    id: '1',
    name: 'Riva del Garda',
    lat: 23,
    lon: 12,
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
    id: '1',
    name: 'Riva del Garda',
    lat: 23,
    lon: 12,
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
    id: '1',
    name: 'Riva del Garda',
    lat: 23,
    lon: 12,
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
  return (
    <main className="container mx-auto">
      <WeatherCardGrid locations={DUMMY_LOCATIONS} />
    </main>
  );
}
