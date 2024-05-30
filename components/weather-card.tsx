import Image from 'next/image';
import { Location } from '@/types/types';
import pinIcon from '@/assets/pin_icon.png';
import sunIcon from '@/assets/sun.png';
import rainIcon from '@/assets/rain.png';

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
      <h3 className="text-[28px]">{location.name}</h3>
      <div>
        <Image src={pinIcon.src} alt="Show on map icon" width={30} height={30} />
      </div>
    </div>
    {location.weather.map(({date, day, night}) => <div
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
      <div className="flex items-center">
        <span className="text-3xl mr-2">
          <span className="text-sm text-font-light-color relative top-[-1px]">{night}</span> {day}
        </span>
        <span>
          <Image src={sunIcon.src} alt="Show on map icon" width={44} height={44} />
        </span>
      </div>
    </div>)}
  </div>
}
