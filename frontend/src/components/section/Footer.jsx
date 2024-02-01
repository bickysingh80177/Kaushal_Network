import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full pt-3 bg-gray-200">
      <div className="xs:flex-col xs:items-center sm:flex-col sm:items-center flex lg:justify-evenly lg:flex-row text-sm py-2">
        <div>Copyright © 2021 . All rights reserved.</div>
        <div className="lg:flex flex-col gap-4">
          <p className="cursor-pointer hover:text-blue-600">
            1. Why Kaushal Netwok?
          </p>
          <p className="cursor-pointer hover:text-blue-600">
            2. Articles & Updates for Industries
          </p>
        </div>
        <div className="lg:flex flex-col gap-4">
          <p className="cursor-pointer hover:text-blue-600">
            3. Upcoming Events
          </p>
          <p className="cursor-pointer hover:text-blue-600">
            4. About Kaushal Network
          </p>
        </div>
        <div className="lg:flex items-start">
          <p className="cursor-pointer hover:text-blue-600">5. Team Members</p>
        </div>

        <div>Hand-crafted & made with ❤️</div>
      </div>
      <span className="text-transparent selection:text-transparent text-xs">
        https://www.linkedin.com/in/bickysinghkushwaha/
      </span>
    </div>
  );
};

export default Footer;
