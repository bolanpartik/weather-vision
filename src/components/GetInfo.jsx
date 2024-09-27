import { Loader2 } from "lucide-react";

export default function GetInfo({ searchCity, setSearchCity, getLatAndLon, loading }) {

    return (
        <div className="w-full flex flex-col items-center p-12 mt-4 font-serif">
            <p className="text-4xl w-full text-center">Enter City</p>
            <div className="flex gap-4 w-full justify-center mt-3">
                <input
                    type="text"
                    placeholder="enter city"
                    value={searchCity}
                    onChange={(e) => {
                        setSearchCity(e.target.value);
                    }}
                    className="input w-full max-w-xs placeholder:opacity-60"
                />
                <button
                    onClick={getLatAndLon}
                    disabled={searchCity === ''}
                    className="h-12 animate-shimmer rounded-md border border-slate-800 bg-bgButton bg-buttonSize px-6 text-slate-200 transition-colors hover:border-slate-500 ">
                    {loading ? <Loader2 className="animate-spin" /> : 'Get Info'}
                </button>
            </div>
        </div>
    )
}