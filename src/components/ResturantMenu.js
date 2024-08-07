import { useParams } from 'react-router-dom';
import useResturantMenu from '../utils/useResturantMenu';
import ResturantCategory from './ResturantCategory';
import Shimmer from './Shimmer';
import { useState } from 'react';

const ResturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useResturantMenu(resId);

    const [showIndex, setShowIndex] = useState(1);
    if (resInfo === null) { return <Shimmer /> }
    else {
        const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(menu =>
            menu.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        // console.log('Categories', resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(menu =>
        //     menu.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        // ))
        return (
            <div className='text-center'>
                <h1 className='font-extrabold text-3xl my-10'> {name}</h1>
                <p className='font-bold text-lg'> {costForTwoMessage} </p>
                <p className='text-lg'> {cuisines.join(',')}</p>
                {categories.map((category, index) =>
                //controlled categoty
                    <ResturantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={()=>setShowIndex(index)}
                    />
                )}
            </div>
        )
    }
}

export default ResturantMenu
