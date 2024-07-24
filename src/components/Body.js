import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResturantsList from "../utils/useResturantsList";


const Body = () => {
    // Local State Variable - Super powerful variable
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();
    const listOfResturant = useResturantsList();
    const [filtredList, setFilteredList] = useState([]);
    useEffect(() => {
        setFilteredList(listOfResturant)
    }, [listOfResturant])
    if (onlineStatus === false) {
        return <h1> Looks like you are offline </h1>
    }
    // Conditional Rendering
    if (listOfResturant.length === 0) {
        return (<Shimmer />)
    }

    return (
        <div className="body">
            <div className="flex justify-between m-2">
                <div type='text'>
                    <input value={searchText} type="text"
                        className="border border-gray-600 rounded-md p-1 mr-2"
                        onChange={(e) => setSearchText(e.target.value)} />
                    <button
                        className="border border-gray-600 rounded-md p-1 bg-gray-400 text-white"
                        onClick={() => {
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
                <div>
                    <button
                        className="border border-gray-600 rounded-md p-1 bg-gray-400 text-white"
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
            </div>
            <div className="flex flex-wrap gap-6 items-stretch justify-center">
                {filtredList && filtredList.map(resturant => (
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