import WeatherCardGrid from '@/components/weather-card-grid'
import Search from '@/components/search/search'
import AddLocation from '@/components/add-location/add-location';

export default function Home({ searchParams }: { searchParams?: { searchName?: string }}) {
  const searchName = searchParams?.searchName || ''

  return (
    <main className="container mx-auto">
      <div className="mb-10">
        <div className="flex relative z-10">
          <Search />
          <AddLocation />
        </div>
      </div>
      <WeatherCardGrid searchName={searchName} />
    </main>
  )
}
