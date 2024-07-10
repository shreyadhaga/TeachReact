import { useState } from "react"

const User = ({ name, location }) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1> Count: {count}</h1>
            <button onClick={() => { setCount(count + 1) }}> Count Increase</button>
            <h2> Name : {name} </h2>
            <h3> Location: {location} </h3>
            <h4> Twitter: @wombatmerry</h4>
        </div>
    )
}

export default User
