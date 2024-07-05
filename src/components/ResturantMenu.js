import { useEffect, useState } from 'react'
import Shimmer from './Shimmer';

const ResturantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        let result = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=330141&catalog_qa=undefined&submitAction=ENTER");
        let json = await result.json();
        setResInfo(json.data)
        console.log(json.data)
    }
    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[7]?.card?.card?.itemCards;
    return (resInfo === null) ? <Shimmer /> :
        (<div className='menu'>
            <h1> {name}</h1>
            <p> {costForTwoMessage} </p>
            <p> {cuisines.join(',')}</p>
            <ul>
                <li> Menu items </li>
            </ul>
        </div>
        )
}

export default ResturantMenu
