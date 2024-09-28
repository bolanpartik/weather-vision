import React, { useEffect, useState } from "react";
import GetInfo from "./GetInfo";

export default function HeroSection() {
    const [searchCity, setSearchCity] = useState('')
    const [loading, setLoading] = useState(false)
    const [coordinates, setCoordinates] = useState([])

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
