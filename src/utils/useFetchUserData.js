import { useEffect, useState } from "react";

const useFetchUserData = () => {
    const [userData, setUserData] = useState({
        name: '',
        location: '',
        html_url: '',
        login: '',
        avatar_url: ''
    })
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch('https://api.github.com/users/shreyadhaga');
        const json = await data.json();
        setUserData(json)
    }
    return userData
}

export default useFetchUserData;