import { useMemo, useState } from 'react'
import HeroPanel from './HeroPanel'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import { fetchWeather } from '../services/weatherApi'

const starterWeather = {
  city: 'Mumbai',
  description: 'clear sky',
  temperature: 31,
  feelsLike: 34,
  humidity: 58,
  windSpeed: 3.2,
}

export default function WeatherShell() {
  const [city, setCity] = useState('Mumbai')
  const [weather, setWeather] = useState(starterWeather)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!city.trim()) {
      setError('Please enter a city name.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const data = await fetchWeather(city.trim())
      setWeather(data)
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const statusBadge = useMemo(() => {
    const temperature = Math.round(weather.temperature)
    if (temperature >= 30) return 'Warm air'
    if (temperature >= 20) return 'Balanced skies'
    return 'Cool breeze'
  }, [weather.temperature])

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_26%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <HeroPanel />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_15px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Current status</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{statusBadge}</p>
                </div>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                  {weather.description}
                </span>
              </div>
            </div>

            <SearchBar
              city={city}
              setCity={setCity}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
          </div>

          <WeatherCard weather={weather} />
        </section>
      </div>
    </main>
  )
}
