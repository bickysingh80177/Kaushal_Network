import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="py-2 bg-[#fdf2f8] shadow-lg shadow-blue-50 w-[100vw] flex justify-between items-center">
      <div className="w-10 mx-0 lg:w-16 2xl:ms-5 sm:ms-4 sm:w-15  xs:ms-2">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="xs:mr-10">
        <div className="xs:w-5 sm:w-10 lg:hidden xs:mr-4 sm:mr-0">
          <Hamburger
            size={20}
            duration={0.8}
            onToggle={(toggled) => {
              setMobileNav(toggled);
            }}
          />
        </div>
        <div
          className={`${
            !mobileNav && "hidden"
          } z-50 lg:hidden absolute right-8 top-12`}
        >
          <ul className="flex justify-start flex-col bg-[#ffffff] p-3 leading-8 rounded-md shadow-sm shadow-orange-200">
            <Link to="/msme">MSME</Link>
            <Link to="/corporate">Business/Corporates</Link>
            <Link to="/service_provider">Banks</Link>
            <Link to="/service_provider">Service Providers</Link>
            <Link to="/network">Network</Link>
            <Link to="/">Meet Now</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </ul>
        </div>
      </div>

      <div className="hidden lg:block 2xl:ms-[-20rem]">
        <nav className="h-10 rounded-2xl mt-2">
          <ul className="lg:flex lg:justify-evenly lg:items-center lg:text-sm lg:gap-5 2xl:text-lg 2xl:ms-[12rem] sm:hidden font-bold navbar-list">
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
      </div>

      <div className="lg:flex lg:justify-evenly lg:items-center lg:mr-5 lg:text-sm rounded-2xl lg:gap-3 sm:hidden xs:hidden">
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
