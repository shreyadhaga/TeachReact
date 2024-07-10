import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResturantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let result = await fetch(`${MENU_API}${resId}1`);
        let json = await result.json();
        setResInfo(json.data)
    }

    return resInfo;
}

export default useResturantMenu;