import { Link } from "react-router-dom";
import images from "./images/images";
import { useState } from "react";
import useOnlineStatus from "./utils/useOnlineStatus";
const Header = () => {
  const [user, setUser] = useState("Login");
  const handleUser = () => {
    user === "user" ? setUser("Login") : setUser("user");
  };
  const status = useOnlineStatus();
  return (
    <header className="flex bg-black w-full text-white">
      <div className="flex justify-center items-center">
        <img src={images.logo} alt="" className="w-16 mr-2" />
        <h1 className="text-4xl text-orange-200 italic font-bold">
          Eat & Swing
        </h1>
      </div>
      <nav className="flex mx-auto">
        <ul className="flex justify-center items-center text-2xl text-blue-50 ">
          <li className="m-2">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="m-2">
            <Link to={`/contact`}>Contact</Link>
          </li>
          <li className="m-2">
            <Link to={`/about`}>About</Link>
          </li>
          <li className="m-2">
            <Link to={`/cart`}>Cart</Link>
          </li>
          <li className="ml-6 text-sm">{status ? "🟢" : "🔴"} </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center">
        {user === "Login" ? (
          <p onClick={handleUser} className="text-2xl font-bold p-5 ">
            Login
          </p>
        ) : (
          <img src={images.user} alt="" className="w-20" onClick={handleUser} />
        )}
      </div>
    </header>
  );
};

export default Header;
