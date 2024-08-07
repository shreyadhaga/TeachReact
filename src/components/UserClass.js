import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: '',
                location: '',
                html_url: '',
                login: '',
                avatar_url: ''
            },
        };
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/shreyadhaga');
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        // console.log(json)
    }
    render() {
        const { name, location, html_url, login, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img alt='avtar url' src={`${avatar_url}`} />
                <UserContext.Consumer>
                    {({ loggedInUser }) => (
                        <h2>Name : {loggedInUser}</h2>
                    )}
                </UserContext.Consumer>
                <h3> Location: {location} </h3>
                <h4> Github: <a href={`${html_url}`} target="_blank"> {login} </a></h4>
            </div>
        )
    }
}

export default UserClass;