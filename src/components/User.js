import useFetchUserData from "../utils/useFetchUserData"
const User = () => {
    const userData = useFetchUserData();
    const { name, location, html_url, login, avatar_url } = userData;
    return (
        <div className="user-card">
            <img alt='avtar url' src={`${avatar_url}`} />
            <h2> Name : {name} </h2>
            <h3> Location: {location} </h3>
            <h4> Github: <a href={`${html_url}`} target="_blank"> {login} </a></h4>
        </div>
    )
}

export default User
