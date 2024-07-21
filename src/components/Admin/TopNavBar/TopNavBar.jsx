import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const TopNavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-800 text-3xl font-bold">
              Admin Fast Food
            </span>
          </div>
          <div className="flex items-center">
            <button className="text-yellow-400 text-2xl focus:outline-none mr-8">
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button className="text-blue-600 text-2xl focus:outline-none">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
