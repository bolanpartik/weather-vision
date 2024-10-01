import Logo from '../assets/logo.jpeg'

export default function NavBar() {
    return (
        <div className='flex justify-between w-full md:w-2/3 rounded-full items-center p-2 text-fuchsia-600 '>

            <div className='flex items-center'>
                <img
                    src={Logo}
                    alt="logo here"
                    className='h-14 rounded-full'
                />
                <p className='ml-3 hidden md:inline text-xl sm:text-2xl font-semibold text-green-500'>Weather Vision</p>
            </div>

            <div className='flex gap-2 md:gap-4 mr-3 transition-all duration-200'>
                <a href="" className='hover:text-indigo-100'>Home</a>
                <a href="" className='hover:text-indigo-100'>About</a>
                <a href="" className='hover:text-indigo-100'>Support</a>
                <a href="" className='hover:text-indigo-100'>Contact</a>
            </div>
        </div>
    )
}