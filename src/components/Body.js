import { useState } from "react";
import ResturantCard from "./ResturantCard";
import resturantData from "../utils/mockData";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfResturant, setListOfResturant] = useState(resturantData.data);
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filtredData = listOfResturant.filter(res =>
                            res.info.avgRating > 4.0
                        );
                        // console.log(filtredData)
                        setListOfResturant(filtredData)
                    }}
                >
                    Top Rated
                </button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        setListOfResturant(resturantData.data)
                    }}
                >
                    Reset
                </button>
            </div>
            <div className="resturant-container">
                {listOfResturant.map(resturant => (
                    <ResturantCard
                        key={resturant.info.id}
                        resData={resturant}
                    />
                ))}
                {/* {resturantData.data.map(resturant => (
                    <ResturantCard
                        key={`2${resturant.info.id}`}
                        resData={resturant}
                    />
                ))}
                {resturantData.data.map(resturant => (
                    <ResturantCard
                        key={`3${resturant.info.id}`}
                        resData={resturant}
                    />
                ))}
                {resturantData.data.map(resturant => (
                    <ResturantCard
                        key={`4${resturant.info.id}`}
                        resData={resturant}
                    />
                ))} */}
            </div>
        </div>
    )
}

export default Body;