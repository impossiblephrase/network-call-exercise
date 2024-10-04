
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ICount } from '../redux/userSlice';

function Navbar() {
    const count = useSelector((state: {userSlice: ICount}) => state.userSlice.value)
    return (
        <div className='bg-gradient-to-r from-violet-950 from-20% via-violet-700 via-40% to-purple-950 to-90%  sticky top-0 shadow-2xl flex justify-between items-center h-38 w-full mx-0 px-4 text-white rounded-lg'>
            <h1 className='text-[40px] font-pirata font-bold text-[gray]'>Network Call Practice</h1>
            <ul className='flex ms-auto items-center'>
                <li className='p-4 font-serif hover:bg-violet-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                    <Link to="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className='p-4 font-serif hover:bg-violet-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                    <Link to="/register">
                        <a>Register</a>
                    </Link>
                </li>
            </ul>
            <h1 className='text-[10px] flex mt-20'>Total User : {count} </h1>
        </div>

    )
}

export default Navbar;
