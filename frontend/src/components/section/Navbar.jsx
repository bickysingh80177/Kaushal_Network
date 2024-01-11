import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-2 bg-[#F1DDFFFA]">
      <div className="w-20">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
