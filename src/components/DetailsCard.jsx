export default function DetailsCard({ weather }) {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  }

  return (
    <div>
      <h1>Weather in {weather.name}, {weather.sys.country}</h1>

      <div>
        <div>
          <h2>Temperature</h2>
          <div>
            <p>Current: <span>{weather.main.temp}°C</span></p>
            <p>Feels Like: <span>{weather.main.feels_like}°C</span></p>
            <p>Min: <span>{weather.main.temp_min}°C</span></p>
            <p>Max: <span>{weather.main.temp_max}°C</span></p>
          </div>
        </div>

        <div>
          <h2>Weather Conditions</h2>
          <div>
            <p>Description: <span>{weather.weather[0].description}</span></p>
            <p>Clouds: <span>{weather.clouds.all}%</span></p>
            <p>Rain (1h): <span>{weather.rain?.["1h"] || 0} mm</span></p>
          </div>
        </div>

        <div>
          <h2>Wind & Pressure</h2>
          <div>
            <p>Wind Speed: <span>{weather.wind.speed} m/s</span></p>
            <p>Wind Direction: <span>{weather.wind.deg}°</span></p>
            <p>Gust: <span>{weather.wind.gust} m/s</span></p>
            <p>Pressure: <span>{weather.main.pressure} hPa</span></p>
          </div>
        </div>

        <div>
          <h2>Humidity & Visibility</h2>
          <div>
            <p>Humidity: <span>{weather.main.humidity}%</span></p>
            <p>Visibility: <span>{weather.visibility / 1000} km</span></p>
          </div>
        </div>
      </div>

      <div>
        <h2>Additional Information</h2>
        <div>
          <p>
            Coordinates: <span>Lat: {weather.coord.lat}, Lon: {weather.coord.lon}</span>
          </p>
          <p>
            Timezone: <span>UTC {weather.timezone / 3600}</span>
          </p>
          <p>
            Sunrise: <span>{formatTime(weather.sys.sunrise)}</span>
          </p>
          <p>
            Sunset: <span>{formatTime(weather.sys.sunset)}</span>
          </p>
        </div>
      </div>

    </div>
  )
}