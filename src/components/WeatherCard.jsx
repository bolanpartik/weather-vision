import { Thermometer, Eye, Sunrise, Sunset, Wind, Gauge } from "lucide-react";

export default function WeatherCard({ weatherResponse }) {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div>
      <div>
        <h2>{weatherResponse?.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>

      <div>
        <p>{weatherResponse?.main.temp.toFixed(1)}°C</p>
        <p>{weatherResponse?.weather[0].description}</p>
        <p>Feels like {weatherResponse?.main.feels_like.toFixed(1)}°C</p>
      </div>

      <div>
        <div>
          <Thermometer />
          <span>{weatherResponse?.main.humidity}% Humidity</span>
        </div>

        <div>
          <Wind />
          <span>{weatherResponse?.wind.speed.toFixed(1)} m/s Wind</span>
        </div>

        <div>
          <Eye />
          <span>{(weatherResponse?.visibility / 1000).toFixed(1)} km Visibility</span>
        </div>

        <div>
          <Gauge />
          <span>{weatherResponse?.main.pressure} hPa Pressure</span>
        </div>

        <div>
          <Sunrise />
          <span>Sunrise: {formatTime(weatherResponse?.sys.sunrise)}</span>
        </div>

        <div>
          <Sunset />
          <span>Sunset: {formatTime(weatherResponse?.sys.sunset)}</span>
        </div>
      </div>
    </div>
  )
}