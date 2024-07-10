import { useParams } from 'react-router-dom';
import useResturantMenu from '../utils/useResturantMenu';
import Shimmer from './Shimmer';

const ResturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useResturantMenu(resId);

    if (resInfo === null) { return <Shimmer /> }
    else {
        const { name, costForTwoMessage, cuisines } =  resInfo?.cards[2]?.card?.card?.info;
        return  (<div className='menu'>
            <h1> {name}</h1>
            <p> {costForTwoMessage} </p>
            <p> {cuisines.join(',')}</p>
        </div>)
    }
}

export default ResturantMenu
