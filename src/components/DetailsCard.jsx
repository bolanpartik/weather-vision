import { Thermometer, Cloud, Droplet, Wind, Eye, MapPin, Clock, Sunrise, Sunset } from 'lucide-react';

export default function DetailsCard({ weather }) {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  }

  return (
    <div className="font-sans w-full mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Weather in {weather.name}, {weather.sys.country}</h1>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-customDark shadow rounded-lg p-6 relative overflow-hidden">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Thermometer className="mr-2" /> Temperature
          </h2>
          <div className="space-y-2">
            <p>Current: <span className="font-medium">{weather.main.temp}°C</span></p>
            <p>Feels Like: <span className="font-medium">{weather.main.feels_like}°C</span></p>
            <p>Min: <span className="font-medium">{weather.main.temp_min}°C</span></p>
            <p>Max: <span className="font-medium">{weather.main.temp_max}°C</span></p>
          </div>
          <Thermometer className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 " size={80} />
        </div>

        <div className="bg-customDark shadow rounded-lg p-6 relative overflow-hidden">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Cloud className="mr-2" /> Weather Conditions
          </h2>
          <div className="space-y-2">
            <p>Description: <span className="font-medium">{weather.weather[0].description}</span></p>
            <p>Clouds: <span className="font-medium">{weather.clouds.all}%</span></p>
            <p>Rain (1h): <span className="font-medium">{weather.rain?.["1h"] || 0} mm</span></p>
          </div>
          <Cloud className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500" size={80} />
        </div>

        <div className="bg-customDark shadow rounded-lg p-6 relative overflow-hidden">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Wind className="mr-2" /> Wind & Pressure
          </h2>
          <div className="space-y-2">
            <p>Wind Speed: <span className="font-medium">{weather.wind.speed} m/s</span></p>
            <p>Wind Direction: <span className="font-medium">{weather.wind.deg}°</span></p>
            <p>Gust: <span className="font-medium">{weather.wind.gust} m/s</span></p>
            <p>Pressure: <span className="font-medium">{weather.main.pressure} hPa</span></p>
          </div>
          <Wind className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 " size={80} />
        </div>

        <div className="bg-customDark shadow rounded-lg p-6 relative overflow-hidden">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Droplet className="mr-2" /> Humidity & Visibility
          </h2>
          <div className="space-y-2">
            <p>Humidity: <span className="font-medium">{weather.main.humidity}%</span></p>
            <p>Visibility: <span className="font-medium">{weather.visibility / 1000} km</span></p>
          </div>
          <Droplet className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-500" size={80} />
        </div>
      </div>

      <div className="mt-8 bg-customDark shadow rounded-lg p-6 relative overflow-hidden">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <MapPin className="mr-2" /> Additional Information
        </h2>
        <div className="space-y-2">
          <p className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            Coordinates: <span className="font-medium ml-1">Lat: {weather.coord.lat}, Lon: {weather.coord.lon}</span>
          </p>
          <p className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            Timezone: <span className="font-medium ml-1">UTC {weather.timezone / 3600}</span>
          </p>
          <p className="flex items-center">
            <Sunrise className="mr-2 h-4 w-4" />
            Sunrise: <span className="font-medium ml-1">{formatTime(weather.sys.sunrise)}</span>
          </p>
          <p className="flex items-center">
            <Sunset className="mr-2 h-4 w-4" />
            Sunset: <span className="font-medium ml-1">{formatTime(weather.sys.sunset)}</span>
          </p>
        </div>
        <Eye className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-500" size={80} />
      </div>

    </div>
  )
}