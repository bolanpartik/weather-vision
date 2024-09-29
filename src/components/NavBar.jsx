import Logo from '../assets/logo.jpeg'

export default function NavBar() {
    return (
        <div className='flex justify-between w-2/3 border border-zinc-400/50 rounded-full items-center p-2 shadow-lg shadow-emerald-100/20 text-fuchsia-600 backdrop-blur-md'>

            <div className='flex items-center'>
                <img
                    src={Logo}
                    alt="logo here"
                    className='h-14 rounded-full'
                />
                <p className='ml-3 text-3xl font-semibold text-green-500'>Weather Vision</p>
            </div>

            <div className='flex gap-4 mr-3 transition-all duration-200'>
                <a href="" className='hover:text-indigo-100'>Home</a>
                <a href="" className='hover:text-indigo-100'>About</a>
                <a href="" className='hover:text-indigo-100'>Support</a>
                <a href="" className='hover:text-indigo-100'>Contact</a>
            </div>
        </div>
    )
}