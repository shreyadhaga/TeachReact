import { useParams } from 'react-router-dom';
import useResturantMenu from '../utils/useResturantMenu';
import Shimmer from './Shimmer';

const ResturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useResturantMenu(resId);

    if (resInfo === null) { return <Shimmer /> }
    else {
        const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
        return (
            <div>
                <h1 className='font-extrabold text-3xl'> {name}</h1>
                <p className='font-bold text-lg'> {costForTwoMessage} </p>
                <p className='text-lg'> {cuisines.join(',')}</p>
            </div>
        )
    }
}

export default ResturantMenu
