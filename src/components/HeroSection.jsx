import React, { useEffect, useState } from "react";
import GetInfo from "./GetInfo";

export default function HeroSection() {
    const [searchCity, setSearchCity] = useState('')
    const [loading, setLoading] = useState(false)
    const [coordinates, setCoordinates] = useState([])
    const [weatherResponse, setWeatherResponse] = useState([])

    const apiKey = import.meta.env.VITE_API_KEY

    const getLatAndLon = async () => {
        try {
            setLoading(true)
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
                console.log(weatherRes)
            } catch (e) {
                console.log(e)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
        getWeatherInfo()
    }, [coordinates])

    return (
        <div>
            <GetInfo
                searchCity={searchCity}
                setSearchCity={setSearchCity}
                getLatAndLon={getLatAndLon}
                loading={loading}
            />
        </div>
    )
}
