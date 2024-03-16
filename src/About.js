import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about-container">
      <User name={"ajith"} address={"khammam"} />
      <UserClass name={"ajith"} address={"khammam"} />
    </div>
  );
};

export default About;
