import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="py-2 bg-[#fdf2f8] shadow-lg shadow-blue-50 w-[100vw] flex justify-between items-center">
      <div className="w-10 mx-0 lg:w-16 2xl:ms-5 sm:ms-4 sm:w-15">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <div
          className="scale-75 lg:hidden sm:mr-4"
          // onClick={setMobileNav((prev) => !prev)}
        >
          <button className="relative group">
            <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
                <div className="bg-white h-[1px] rounded"></div>
                <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
              </div>
            </div>
          </button>
        </div>
        <div className={`${"lg:hidden"}`}>
          <ul className="bg-[#f0f9ff] p-3">
            <li>MSME</li>
            <li>Business/Corporates</li>
            <li>Banks</li>
            <li>Service Providers</li>
            <li>Network</li>
            <li>Meet Now</li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block 2xl:ms-[-20rem]">
        <nav className="h-10 rounded-2xl mt-2">
          <ul className="lg:flex lg:justify-evenly lg:items-center lg:text-sm lg:gap-1 2xl:text-lg 2xl:ms-[12rem] sm:hidden font-bold navbar-list">
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
