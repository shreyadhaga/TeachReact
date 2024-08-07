import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1> <span className="font-extrabold text-3xl"> About Us </span> </h1>
            <div>
                {/* <User /> */}
                <UserClass name={'Shreya (class)'} location={'Delhi (class)'} />
            </div>
        </div>)
}

export default About;