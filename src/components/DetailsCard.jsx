import { Thermometer, Cloud, Droplet, Wind, Eye, MapPin, Clock, Sunrise, Sunset } from 'lucide-react';

export default function DetailsCard({ weather }) {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  }

  return (
    <div>
      <h1>Weather in {weather.name}, {weather.sys.country}</h1>

      <div>
        <div>
          <h2>
            <Thermometer /> Temperature
          </h2>
          <div>
            <p>Current: <span>{weather.main.temp}°C</span></p>
            <p>Feels Like: <span>{weather.main.feels_like}°C</span></p>
            <p>Min: <span>{weather.main.temp_min}°C</span></p>
            <p>Max: <span>{weather.main.temp_max}°C</span></p>
          </div>
          <Thermometer size={80} />
        </div>

        <div>
          <h2>
            <Cloud /> Weather Conditions
          </h2>
          <div>
            <p>Description: <span>{weather.weather[0].description}</span></p>
            <p>Clouds: <span>{weather.clouds.all}%</span></p>
            <p>Rain (1h): <span>{weather.rain?.["1h"] || 0} mm</span></p>
          </div>
          <Cloud size={80} />
        </div>

        <div>
          <h2>
            <Wind /> Wind & Pressure
          </h2>
          <div>
            <p>Wind Speed: <span>{weather.wind.speed} m/s</span></p>
            <p>Wind Direction: <span>{weather.wind.deg}°</span></p>
            <p>Gust: <span>{weather.wind.gust} m/s</span></p>
            <p>Pressure: <span>{weather.main.pressure} hPa</span></p>
          </div>
          <Wind size={80} />
        </div>

        <div>
          <h2>
            <Droplet /> Humidity & Visibility
          </h2>
          <div>
            <p>Humidity: <span>{weather.main.humidity}%</span></p>
            <p>Visibility: <span>{weather.visibility / 1000} km</span></p>
          </div>
          <Droplet size={80} />
        </div>
      </div>

      <div>
        <h2>
          <MapPin /> Additional Information
        </h2>
        <div>
          <p>
            <MapPin />
            Coordinates: <span>Lat: {weather.coord.lat}, Lon: {weather.coord.lon}</span>
          </p>
          <p>
            <Clock />
            Timezone: <span>UTC {weather.timezone / 3600}</span>
          </p>
          <p>
            <Sunrise />
            Sunrise: <span>{formatTime(weather.sys.sunrise)}</span>
          </p>
          <p>
            <Sunset />
            Sunset: <span>{formatTime(weather.sys.sunset)}</span>
          </p>
        </div>
        <Eye size={80} />
      </div>

    </div>
  )
}