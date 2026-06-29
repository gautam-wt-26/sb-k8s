export async function fetchWeather(city) {
  const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || 'Unable to fetch weather right now.')
  }

  return response.json()
}
