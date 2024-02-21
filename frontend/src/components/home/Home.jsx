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
        <div className="flex justify-center items-center sm:flex-col mt-8">
          <div className="search-group">
            <input type="text" placeholder="Category" />
            <input type="text" placeholder="Industry, Sector Type" />
            <input type="text" placeholder="Location" />
          </div>
          <button className="sm:mt-10 sm:px-2 sm:w-24 sm:h-8 sm:gap-2 sm:py-1 bg-[#253974] text-white rounded-md lg:px-4 lg:py-2 text-sm lg:p-auto hover:bg-[#3E63DD] hover:text-gray-400 lg:ms-8 flex items-center justify-center gap-4 h-10 w-32">
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
        <div className="flex sm:flex-col sm:items-center sm:mt-4 lg:mt-8 lg:flex-row lg:w-3/4 lg:m-auto lg:gap-8">
          <div className="sm:w-3/4 lg:w-2/6">
            <h2 className="top-section">Services</h2>
            <div className="top-section-details">Top services</div>
          </div>
          <div className="sm:w-3/4 sm:mt-12 lg:w-2/6">
            <h2 className="top-section">MSMEs</h2>
            <div className="top-section-details">Top services</div>
          </div>
          <div className="sm:w-3/4 sm:mt-12 lg:w-2/6">
            <h2 className="top-section">Corporates</h2>
            <div className="top-section-details">Top services</div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:mt-4 lg:mt-8">
          <h3 className="sm:text-xl lg:text-2xl font-medium">
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
