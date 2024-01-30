import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="xs:flex-col xs:items-center sm:flex-col sm:items-center flex lg:justify-evenly lg:flex-row text-sm bg-gray-200 py-2">
        <span>Copyright © 2021 . All rights reserved.</span>
        <span className="text-transparent selection:text-transparent">
          https://www.linkedin.com/in/bickysinghkushwaha/
        </span>
        <span>Hand-crafted & made with ❤️</span>
      </div>
    </div>
  );
};

export default Footer;
