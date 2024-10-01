import { Loader2 } from "lucide-react";

export default function GetInfo({ searchCity, setSearchCity, getLatAndLon, loading }) {

    return (
        <div className="w-full flex flex-col items-center mt-8 font-serif">
            <div className="bg-customDark/20 p-5 md:p-10 rounded-xl w-full md:w-1/2" >

                <p className="text-2xl md:text-4xl w-full text-center">Enter City</p>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full shrink justify-center mt-3">
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
                        className="h-12 text-sm md:text-base animate-shimmer rounded-md border border-slate-800 bg-bgButton bg-buttonSize px-6 text-slate-200 transition-colors hover:border-slate-500 disabled:cursor-not-allowed max-w-xs shrink-0">
                        {loading ? <Loader2 className="animate-spin" /> : 'Get Info'}
                    </button>
                </div>
            </div>
        </div>
    )
}