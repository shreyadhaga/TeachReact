import { useState } from 'react';
import Logo from '../../assets/Logo';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnName] = useState(true);
    const online = useOnlineStatus()
    return (
        <div className="header">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="nav-items">
                <ul>
                    <li className={online === false ? 'dot offline' : 'dot online'} />
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'> About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={() => setBtnName(!btnName)}> {btnName ? 'Online' : 'Offline'} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header