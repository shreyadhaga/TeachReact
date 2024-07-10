import { useEffect, useState } from 'react';
import { MAIN_URL } from './constants';

const useResturantsList = () => {
    const [resturantList, setResturantList] = useState([])
    useEffect(() => { 
        fetchData()
    }, [])
    const fetchData = async () =>{
        const data = await fetch(MAIN_URL)
        const json = await data.json();
        setResturantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return resturantList
}

export default useResturantsList
