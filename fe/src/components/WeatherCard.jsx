const metrics = [
  { label: 'Feels like', key: 'feelsLike', unit: '°C' },
  { label: 'Humidity', key: 'humidity', unit: '%' },
  { label: 'Wind', key: 'windSpeed', unit: ' m/s' },
]

function formatValue(item, data) {
  if (item.key === 'temperature') {
    return `${Math.round(data.temperature)}°`
  }

  if (item.key === 'feelsLike') {
    return `${Math.round(data.feelsLike)}°`
  }

  return `${data[item.key]}${item.unit}`
}

export default function WeatherCard({ weather }) {
  return (
    <div className="rounded-[32px] border border-white/20 bg-slate-950/70 p-6 shadow-[0_20px_80px_rgba(3,7,18,0.45)] backdrop-blur-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Live forecast</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">{weather.city}</h2>
          <p className="mt-3 text-lg capitalize text-slate-300">{weather.description}</p>
        </div>
        <div className="rounded-2xl bg-cyan-500/15 px-4 py-3 text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Now</p>
          <p className="text-4xl font-semibold text-cyan-100">{Math.round(weather.temperature)}°</p>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.key} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">{metric.label}</p>
            <p className="mt-2 text-xl font-semibold text-white">{formatValue(metric, weather)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
