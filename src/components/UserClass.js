import React from "react";

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
        console.log(json)
    }
    render() {
        const { name, location, html_url, login, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img alt='avtar url' src={`${avatar_url}`} />
                <h2> Name : {name} </h2>
                <h3> Location: {location} </h3>
                <h4> Github: <a href={`${html_url}`} target="_blank"> {login} </a></h4>
            </div>
        )
    }
}

export default UserClass;