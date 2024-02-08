import React from "react";
import Navbar from "../section/Navbar";
import Footer from "../section/Footer";
// import search from "../assets/images/searchicon";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-8">
        <h1 className="lg:text-4xl lg:mt-5 flex justify-center font-extralight">
          Join Kaushal Network
        </h1>
        <h3 className="lg:text-xl lg:mt-5 flex justify-center font-extralight">
          Find MSMEs, Service Providers, Corporates
        </h3>
        {/* search group */}
        <div className="lg:flex lg:justify-center lg:items-center mt-8">
          <div className="search-group">
            <input type="text" placeholder="Category" />
            <input type="text" placeholder="Industry, Sector Type" />
            <input type="text" placeholder="Location" />
          </div>
          <button className="bg-[#253974] text-white rounded-md px-4 py-2 text-sm p-auto hover:bg-[#3E63DD] hover:text-gray-400 ms-8 flex items-center justify-center gap-4 h-10 w-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Search
          </button>
        </div>
        <div className="lg:mt-8 lg:flex lg:flex-row lg:w-3/4 lg:m-auto lg:gap-8">
          <div className="w-2/6">
            <h2 className="top-section">Services</h2>
            <div className="top-section-details">Top services</div>
          </div>
          <div className="w-2/6">
            <h2 className="top-section">MSMEs</h2>
            <div className="top-section-details">Top services</div>
          </div>
          <div className="w-2/6">
            <h2 className="top-section">Corporates</h2>
            <div className="top-section-details">Top services</div>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:items-center lg:mt-8">
          <h3 className="text-2xl">
            Sponsered Businesses, Service Providers, MSMEs
          </h3>
          <div className="w-5/6 bg-red-100 h-80 mt-4 p-1 rounded-md">
            Sponsered items
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
