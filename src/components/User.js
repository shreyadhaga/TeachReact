import useFetchUserData from "../utils/useFetchUserData"
const User = () => {
    const userData = useFetchUserData();
    const { name, location, html_url, login, avatar_url } = userData;
    return (
        <div className="user-card">
            <img className='h-52 rounded-full' alt='avtar url' src={`${avatar_url}`} />
            <h2> <span className="font-bold">Name </span>: {name} </h2>
            <h3> <span className="font-bold">Location </span>: {location} </h3>
            <h4> <span className="font-bold">Github</span>: <a href={`${html_url}`} target="_blank"> {login} </a></h4>
        </div>
    )
}

export default User