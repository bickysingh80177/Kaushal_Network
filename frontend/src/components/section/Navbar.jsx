import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 bg-[#fdf2f8] shadow-lg shadow-blue-50 w-full px-20">
      <div className="w-16 ms-5">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="h-10 rounded-2xl ms-32 mt-2">
        <ul className="flex justify-evenly items-center text-lg font-bold navbar-list">
          <li className="navbar-btn">
            <Link to="/msme">MSMe</Link>
          </li>
          <li className="navbar-btn">
            <Link to="/corporate">Business/Corporates</Link>
          </li>
          <li className="navbar-btn">
            <Link to="/">Banks</Link>
          </li>
          <li className="navbar-btn">
            <Link to="/service_provider">Service Providers</Link>
          </li>
          <li className="navbar-btn">
            <Link to="/network">Network</Link>
          </li>
          <li className="navbar-btn">
            <Link to="/">Meet Now</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-evenly items-center rounded-2xl gap-3">
        <Link to="/login">
          <button className="bg-[#3094FEB9] p-1 w-20 rounded-lg text-white hover:text-gray-300">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-[#3094FEB9] p-1 w-20 rounded-lg text-white hover:text-gray-300">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
