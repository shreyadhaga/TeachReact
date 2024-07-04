import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfResturant, setListOfResturant] = useState([]);
    const [filtredList, setFilteredList] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING%27");
        const json = await data.json();
        setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //Conditional Rendering
    if (listOfResturant.length === 0) {
        return (<Shimmer />)
    }

    return listOfResturant.length === 0 ?
        <Shimmer /> :
        (
            <div className="body">
                <div className="filter">
                    <div type='text' className="search">
                        <input value={searchText} type="text" className="search-box" onChange={(e) => setSearchText(e.target.value)} />
                        <button onClick={() => {
                            if (searchText != '') {
                                let filtredData = listOfResturant.filter(res =>
                                    res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                                setFilteredList(filtredData)
                            } else {
                                setFilteredList(listOfResturant)
                            }
                        }}>Search</button>
                    </div>
                    <button
                        className="filter-btn"
                        onClick={() => {
                            let filtredData = listOfResturant.filter(res =>
                                res.info.avgRating > 4.5
                            );
                            setFilteredList(filtredData)
                        }}
                    >
                        Top Rated
                    </button>
                </div>
                <div className="resturant-container">
                    {filtredList.map(resturant => (
                        <ResturantCard
                            key={resturant.info.id}
                            resData={resturant}
                        />
                    ))}
                </div>
            </div>
        )
}

export default Body;