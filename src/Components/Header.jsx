import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {

  const [nav,setNav] = useState("visible");

  const handleNav = () => {
    if (nav === "visible") {
      return setNav("hidden");
    }
    if(nav !== "visible"){
      return setNav("visible");
    }
  }


    return (
      <header className="header w-full flex flex-row bg-slate-100 justify-between p-3 px-10 shadow-lg shadow-[#333] fixed top-0 z-10">
          <h3 className="logo font-serif font-bold text-2xl text-fuchsia-600 animate-bounce	">🍔Food Corner🍔</h3>
          <i className="fa-solid fa-bars sm:hidden" style={{color: "#3de686"}} onClick={() => handleNav }></i>
          <ul className='navList md:flex md:list-none md:gap-10' style={{visibility:{nav}}}>
              <Link to="/">
                <li className="font-bold text-lg text-blue-500">Home</li>
              </Link>
              <Link to="/SearchBox">
                <li className="font-bold text-lg text-blue-500">Search By Name</li>
              </Link>
              <Link to="/Random">
                <li className="font-bold text-lg text-blue-500">Random Search</li>
              </Link>
              <Link to="/Contact">
                <li className="font-bold text-lg text-blue-500">Contact</li>
              </Link>
          </ul>
      </header>
  )};

  export default Header;