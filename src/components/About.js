import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1> About Us </h1>
            <div>
                {/* <User name={'Shreya (function)'} location={'Delhi (function)'}/> */}
                <UserClass name={'Shreya (class)'} location={'Delhi (class)'} />
            </div>
        </div>)
}

export default About;