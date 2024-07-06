import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../utils/constants";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfResturant, setListOfResturant] = useState([]);
    const [filtredList, setFilteredList] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MAIN_URL)
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
                        // <Link key={resturant.info.id} to={`/resturant/${resturant.info.id}`}>
                        <Link key={resturant.info.id} to={`/resturant/123`}>
                        <ResturantCard
                            resData={resturant}
                        />
                        </Link>
                    ))}
                </div>
            </div>
        )
}

export default Body;