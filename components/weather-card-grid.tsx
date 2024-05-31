import WeatherCard from '@/components/weather-card'
import { Location } from '@/types/types';

export default function WeatherCardGrid({ locations } : { locations: Location[] }) {
  if (!locations.length)
    return <div className="text-center pt-8">
      Please add som locations to see the weather for upcoming weekend :)
    </div>

  return <div className="grid grid-cols-3 gap-8">
    {locations.map(location => <WeatherCard key={location.id} location={location} />)}
  </div>
}
