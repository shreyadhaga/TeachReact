import { useState } from 'react';
import Logo from '../../assets/Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnName, setBtnName] = useState(true);
    return (
        <div className="header">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'> About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={() => setBtnName(!btnName)}> {btnName ? 'Online' : 'Offline'} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header