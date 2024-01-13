import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-start items-center gap-x-80 py-2 bg-[#ecfdf57a] shadow-lg shadow-blue-50">
      <div className="w-16 ms-5">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="w-[50rem] h-10 rounded-2xl ms-32 mt-2">
        <ul className="flex justify-evenly items-center text-lg font-bold">
          <li>MSMe</li>
          <li>Business/Corporates</li>
          <li>Banks</li>
          <li>Service Providers</li>
          <li>Network/Meet Now</li>
        </ul>
      </nav>
      <div className="bg-gray-200 flex justify-evenly items-center rounded-2xl w-[15rem] h-10">
        <h1>Login</h1>
        <h1>Register</h1>
      </div>
    </div>
  );
};

export default Navbar;
