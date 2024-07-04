import { useState } from 'react';
import Logo from '../../assets/Logo';

const Header = () => {
    const [btnName, setBtnName] = useState(true);
    return (
        <div className="header">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => setBtnName(!btnName)}> {btnName ? 'Online' : 'Offline'} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header