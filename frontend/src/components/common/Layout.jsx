import React from "react";
import Navbar from "../section/Navbar";

const Layout = ({ component }) => {
  return (
    <>
      <Navbar />
      <div>{component}</div>
    </>
  );
};

export default Layout;
