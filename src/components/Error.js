import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    // console.log(err)
    return (
        <div>
            <h1> <span className="font-extrabold text-3xl"> Oops {err.status} {err.statusText} </span></h1>
        </div>
    )
}

export default Error
