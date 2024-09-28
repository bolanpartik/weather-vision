import React, { useEffect, useState } from "react";
import GetInfo from "./GetInfo";

export default function HeroSection() {
    const [searchCity, setSearchCity] = useState('')
    const [loading, setLoading] = useState(false)
    
    const getLatAndLon = () => {
        // code to fetch the coordinates of city
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
