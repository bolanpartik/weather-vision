import React, { useEffect, useState } from "react";
import GetInfo from "./GetInfo";
import WeatherCard from "./WeatherCard";
import DetailsCard from "./DetailsCard";

export default function HeroSection() {
    const [searchCity, setSearchCity] = useState('')
    const [loading, setLoading] = useState(false)
    const [coordinates, setCoordinates] = useState([])
    const [weatherResponse, setWeatherResponse] = useState([])
    const [clickedWeather, setClickedWeather] = useState(null)
    const [weatherLoading, setWeatherLoading] = useState(false)

    const apiKey = import.meta.env.VITE_API_KEY

    const getLatAndLon = async () => {
        try {
            setLoading(true)
            setWeatherLoading(true)
            setWeatherResponse([])
            setCoordinates([])
            setClickedWeather(null)
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=${apiKey}`)
            const parsedRes = await response.json()
            const newCoordinates = parsedRes.map(location => ({ lat: location.lat, lon: location.lon }))
            setCoordinates(newCoordinates)
        } catch (e) {
            console.log('Error: ', e)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (coordinates.length === 0) {
            return;
        }
        const getWeatherInfo = async () => {
            try {
                const allPromise = coordinates.map(async (coordinate) => {
                    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${apiKey}&units=metric`)
                    return await res.json()
                })
                const weatherRes = await Promise.all(allPromise)
                setWeatherResponse(weatherRes)
            } catch (e) {
                console.log(e)
                setLoading(false)
                setWeatherLoading(false)
            } finally {
                setLoading(false)
                setWeatherLoading(false)
            }
        }
        getWeatherInfo()
    }, [coordinates])

    const handleCardClick = (weather) => {
        setClickedWeather(weather)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <GetInfo
                searchCity={searchCity}
                setSearchCity={setSearchCity}
                getLatAndLon={getLatAndLon}
                loading={loading}
            />
            <div className="w-full md:w-2/3 flex flex-wrap gap-5 justify-center mt-4">
            {clickedWeather ? (
                <DetailsCard weather={clickedWeather}/>
            ) : weatherResponse.length > 0 ?
                weatherResponse?.map((weather, index) => {
                    return (
                        <WeatherCard
                            weatherResponse={weather}
                            key={index}
                            handleCardClick={() => handleCardClick(weather)}
                        />
                    )
                })
                : <p className="w-full md:w-1/2 text-center p-4 rounded-lg bg-gray-900 text-gray-300 shadow-md">
                    {weatherLoading ? 'Loading...' : 'Nothing to show'}
                </p>
            }
            </div>
        </div>
    )
}
