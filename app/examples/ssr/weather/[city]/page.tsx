import { notFound } from 'next/navigation'
import {
  CloudIcon,
  SunIcon,
  MoonIcon,
  DropletIcon,
  WindIcon
} from 'lucide-react'

interface WeatherData {
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  weather: Array<{
    main: string
    description: string
  }>
  name: string
}

interface PageProps {
  params: { city: string }
}

// Función para obtener los datos del clima
async function getWeatherData(city: string): Promise<WeatherData> {
  const apiKey = '8ca4d983133eb131a5990fab52392e85'

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch weather data')
  }

  return res.json()
}

export default async function Page({ params }: PageProps) {
  const { city } = params
  console.log(city)
  const weatherData: WeatherData = await getWeatherData(city)

  if (!weatherData) {
    notFound()
  }

  const isNight =
    new Date(weatherData.dt * 1000).getHours() >= 18 ||
    new Date(weatherData.dt * 1000).getHours() < 6

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-xl p-6 max-w-md w-full'>
        <h1 className='text-3xl font-bold mb-4 text-center'>
          {weatherData.name}, {weatherData.sys.country}
        </h1>
        <div className='flex justify-center mb-6'>
          {isNight ? (
            <MoonIcon className='w-24 h-24 text-gray-600' />
          ) : weatherData.weather[0].main.toLowerCase().includes('cloud') ? (
            <CloudIcon className='w-24 h-24 text-gray-400' />
          ) : (
            <SunIcon className='w-24 h-24 text-yellow-400' />
          )}
        </div>
        <p className='text-5xl font-bold text-center mb-6'>
          {Math.round(weatherData.main.temp)}°C
        </p>
        <p className='text-xl text-center mb-6 capitalize'>
          {weatherData.weather[0].description}
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center'>
            <DropletIcon className='w-6 h-6 mr-2 text-blue-500' />
            <div>
              <p className='text-sm text-gray-600'>Humidity</p>
              <p className='text-lg font-semibold'>
                {weatherData.main.humidity}%
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <WindIcon className='w-6 h-6 mr-2 text-blue-500' />
            <div>
              <p className='text-sm text-gray-600'>Wind Speed</p>
              <p className='text-lg font-semibold'>
                {weatherData.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
        <div className='mt-6 text-center text-sm text-gray-600'>
          <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
        </div>
        <p className='mt-6 text-xs text-center text-gray-500'>
          Last updated: {new Date(weatherData.dt * 1000).toLocaleString()}
        </p>
      </div>
    </div>
  )
}
