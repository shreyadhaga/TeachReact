import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import resturantData from "../utils/mockData";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfResturant, setListOfResturant] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING%27");
        const json = await data.json();
        setListOfResturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filtredData = listOfResturant.filter(res =>
                            res.info.avgRating > 4.0
                        );
                        setListOfResturant(filtredData)
                    }}
                >
                    Top Rated
                </button>
            </div>
            <div className="resturant-container">
                {listOfResturant.map(resturant => (
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