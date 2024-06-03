import WeatherCard from '@/components/weather-card'
import { enrichLocationsWithWeather, getLocations, getWeather } from '@/libs/locations';

export default async function WeatherCardGrid({ searchName }: { searchName: string }) {
  const locations = getLocations();
  const weather = await getWeather(locations);
  let locationsWithWeather = enrichLocationsWithWeather(locations, weather)

  locationsWithWeather = locationsWithWeather
    .filter(({ name }) => name.toLowerCase().includes(searchName.toLowerCase()));

  if (!locations.length)
    return <div className="text-center pt-8">
      Please add som locations to see the weather for upcoming weekend :)
    </div>

  return <div className="grid grid-cols-3 gap-8">
    {locationsWithWeather.map(location => <WeatherCard key={location.id} location={location} />)}
  </div>
}
