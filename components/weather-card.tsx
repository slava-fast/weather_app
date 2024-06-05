import Image from 'next/image';
import { Location } from '@/types/types';
import pinIcon from '@/assets/pin_icon.png';
import mapLocator from '@/assets/map-locator.png';

import sunIcon from '@/assets/sun.png';
import partiallyCloudIcon from '@/assets/mostly_clear.png';
import cloudIcon from '@/assets/cloud.png';
import snowIcon from '@/assets/snow.png';
import rainIcon from '@/assets/rain.png';
import lightRainIcon from '@/assets/light_rain.png';
import thunderstormIcon from '@/assets/thunderstorm.png';
import iceIcon from '@/assets/ice.png';
import unknownIcon from '@/assets/question-sign.png';

import crossIcon from '@/assets/cross.png';
import { deleteLocation } from '@/actions/locations';
import { WEATHER_BY_CODE, WEATHER_NAMES } from '@/constants/weather';

const WEATHER_IMAGE_BY_CODE: { [key: string]: string } = {
  [WEATHER_NAMES.SUNNY]: sunIcon.src,
  [WEATHER_NAMES.PARTLY_CLOUDY]: partiallyCloudIcon.src,
  [WEATHER_NAMES.CLOUDY]: cloudIcon.src,
  [WEATHER_NAMES.SNOW]: snowIcon.src,
  [WEATHER_NAMES.RAIN]: rainIcon.src,
  [WEATHER_NAMES.LIGHT_RAIN]: lightRainIcon.src,
  [WEATHER_NAMES.THUNDERSTORM]: thunderstormIcon.src,
  [WEATHER_NAMES.THUNDERSTORM]: iceIcon.src,
  [WEATHER_NAMES.UNKNOWN]: unknownIcon.src,
}

export default function WeatherCard({ location }: { location: Location }) {
  const getIconSrc = (iconCode: number = -1) => {
    const iconData = WEATHER_BY_CODE[String(iconCode)]

    if (!iconData) return unknownIcon.src

    return WEATHER_IMAGE_BY_CODE[iconData.name]
  }

  return <div
    className="
      relative
      z-1
      p-6
      rounded-lg
      shadow-md
      shadow-gray-500
      bg-white
      text-lg
    "
  >
    <div className="absolute right-3 top-2">
      <form action={deleteLocation.bind(null, location.id)}>
        <button>
          <Image src={crossIcon.src} alt="Show on map icon" width={16} height={16} />
        </button>
      </form>
    </div>
    <div
      className="
        flex
        items-end
        mb-6
      "
    >
      <h3 className="text-3xl w-full">
        <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[calc(100%-100px)]">
          {location.name}
        </span>
        <div className="ml-2 inline-block">
          <a
            className="inline-block"
            href={`https://www.google.com/maps/@${location.lat},${location.lon},13z`} target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={pinIcon.src} alt="Show on map icon" width={40} height={40}/>
          </a>
          <a
            className="inline-block"
            href={`https://www.google.com/maps/dir/47.91484738084041,11.428862702514923/${location.lat},${location.lon}`}
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={mapLocator.src} alt="Show on map icon" width={40} height={40}/>
          </a>
        </div>
      </h3>
    </div>
    {(location.weather || []).map(({date, day, night, weatherCode}) => <div
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
          {<Image
            src={getIconSrc(weatherCode)}
            alt={WEATHER_BY_CODE[String(weatherCode)] ? WEATHER_BY_CODE[String(weatherCode)].title : ''}
            title={WEATHER_BY_CODE[String(weatherCode)] ? WEATHER_BY_CODE[String(weatherCode)].title : ''}
            width={44}
            height={44}
          />}
        </span>
      </div>
    </div>)}
  </div>
}
