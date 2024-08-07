import { useState, useContext } from 'react';
import Logo from '../../assets/Logo';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
    const online = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between">
            <div className="w-20">
                <Logo />
            </div>
            <div className='content-center '>
                <ul className='flex gap-3 p-2'>
                    <li className={`w-3 h-3 ${online === false ? 'bg-red-700' : 'bg-green-700'} rounded-full self-center`} />
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'> About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <li className='px-4 font-bold'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header