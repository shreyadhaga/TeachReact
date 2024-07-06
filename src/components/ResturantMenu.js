import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import Shimmer from './Shimmer';

const ResturantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let result = await fetch(`${MENU_API}${resId}1`);
        let json = await result.json();
        setResInfo(json.data)
    }

    if (resInfo === null) { return <Shimmer /> }
    else {
        const { name, costForTwoMessage, cuisines } =  resInfo?.cards[2]?.card?.card?.info;
        // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card.card;
        return  (<div className='menu'>
            <h1> {name}</h1>
            <p> {costForTwoMessage} </p>
            <p> {cuisines.join(',')}</p>
            <ul>
                {/* {itemCards.map(x => (
                    <li key={x?.info?.id}>{x?.card?.info?.name} : Rs {(x?.card?.info?.price / 100)}/-</li>
                ))} */}
            </ul>
        </div>)
    }
}

export default ResturantMenu
