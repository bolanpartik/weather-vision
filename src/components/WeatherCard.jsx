import { Thermometer, Eye, Sunrise, Sunset, Wind, Gauge } from "lucide-react";

export default function WeatherCard({ weatherResponse }) {

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg rounded-lg p-3 max-w-md  hover:shadow-2xl transition-all mb-4 border-2 border-transparent hover:border-gray-500">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-500">{weatherResponse?.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-16 h-16"
        />
      </div>

      <div className="mb-4">
        <p className="text-5xl font-bold text-gray-500">{weatherResponse?.main.temp.toFixed(1)}°C</p>
        <p className="text-gray-300 mt-1 capitalize">{weatherResponse?.weather[0].description}</p>
        <p className="text-sm text-gray-400">Feels like {weatherResponse?.main.feels_like.toFixed(1)}°C</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">

        <div className="flex items-center">
          <Thermometer className="w-5 h-5 mr-2 text-blue-400" />
          <span>{weatherResponse?.main.humidity}% Humidity</span>
        </div>

        <div className="flex items-center">
          <Wind className="w-5 h-5 mr-2 text-blue-400" />
          <span>{weatherResponse?.wind.speed.toFixed(1)} m/s Wind</span>
        </div>

        <div className="flex items-center">
          <Eye className="w-5 h-5 mr-2 text-blue-400" />
          <span>{(weatherResponse?.visibility / 1000).toFixed(1)} km Visibility</span>
        </div>

        <div className="flex items-center">
          <Gauge className="w-5 h-5 mr-2 text-blue-400" />
          <span>{weatherResponse?.main.pressure} hPa Pressure</span>
        </div>

        <div className="flex items-center">
          <Sunrise className="w-5 h-5 mr-2 text-yellow-400" />
          <span>Sunrise: {formatTime(weatherResponse?.sys.sunrise)}</span>
        </div>

        <div className="flex items-center">
          <Sunset className="w-5 h-5 mr-2 text-orange-400" />
          <span>Sunset: {formatTime(weatherResponse?.sys.sunset)}</span>
        </div>

      </div>
    </div>

  )
}