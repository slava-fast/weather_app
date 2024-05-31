import Image from 'next/image';
import { Location } from '@/types/types';
import pinIcon from '@/assets/pin_icon.png';
import mapLocator from '@/assets/map-locator.png';
import sunIcon from '@/assets/sun.png';

export default function WeatherCard({ location }: { location: Location }) {
  return <div
    className="
      p-6
      rounded-lg
      shadow-md
      shadow-gray-500
      bg-white
      text-lg
    "
  >
    <div
      className="
        flex
        justify-between
        items-end
        mb-6
      "
    >
      <h3 className="text-3xl">{location.name}</h3>
      <div className="flex">
        <a href={`https://www.google.com/maps/@${location.lat},${location.lon},13z`} target="_blank" rel="noopener noreferrer">
          <Image src={pinIcon.src} alt="Show on map icon" width={44} height={44} />
        </a>
        <a href={`https://www.google.com/maps/dir/47.91484738084041,11.428862702514923/${location.lat},${location.lon}`} target="_blank" rel="noopener noreferrer">
          <Image src={mapLocator.src} alt="Show on map icon" width={44} height={44} />
        </a>
      </div>
    </div>
    {(location.weather || []).map(({date, day, night}) => <div
      key={date}
      className="
        flex
        justify-between
        items-center
        mb-2
        pb-2
        border-b
        border-b-border-color
        last:border-b-0
        last:mb-0
      "
    >
      <span>{date}</span>
      <div className="flex">
        <span className="text-3xl mr-4">
          <span className="text-sm text-font-light-color">{night}</span> {day}
        </span>
        <span>
          <Image src={sunIcon.src} alt="Show on map icon" width={44} height={44} />
        </span>
      </div>
    </div>)}
  </div>
}
