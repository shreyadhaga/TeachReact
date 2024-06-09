import React from "react";
import { createRoot } from 'react-dom/client';
import Logo from './assets/Logo';
import foodImg from './assets/food.jpg';
import { Clock, Cuisine, Star } from "./assets/Icons";
const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}
const ResturantCard = (props) => {
    const { name, cuisine, rating, eta } = props;
    return (
        <div className="resturant-card">
            <img alt='resturant-logo' className='resturant-logo' src={foodImg} />
            <div className="resturant-details">
                <div className="resturant-name">
                    <h3> {name} </h3>
                </div>
                <div className="resturant-rating">
                    <Star />
                    <span> {rating}</span>
                </div>
                <div className="resturant-delivery-details">
                    <div className="resturant-cuisine-details"><Cuisine /> <span>{cuisine}</span></div>
                    <div className="resturant-eta-details"> <Clock /><span>{eta} mins </span></div>
                </div>
            </div>
        </div>
    )
}

let data ={ }
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="resturant-container">
                <ResturantCard name='Meghana Foods' cuisine='Bakery' rating='4.4' eta='40' />
                <ResturantCard name='KFC' cuisine='Fast Food' rating='3.4' eta='50' />
            </div>
        </div>
    )
}
// Component Composition
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

// JSX Satitizes Data - Handles cross site scripting attacks
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<AppLayout />);
