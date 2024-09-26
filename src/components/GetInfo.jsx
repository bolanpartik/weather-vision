export default function GetInfo({ searchCity, setSearchCity }) {

    return (
        <div>
            <p>Enter City</p>
            <div>
                <input
                    type="text"
                    placeholder="enter city"
                    value={searchCity}
                    onChange={(e) => {
                        setSearchCity(e.target.value);
                    }}
                />
                <button>
                    Get Info
                </button>
            </div>
        </div>
    )
}
