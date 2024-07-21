import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faTags, faBox, faClipboardList, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-gray-900 w-64 fixed min-h-screen">
      <div className="px-6 py-4">
        <h2 className="font-bold text-center text-4xl dancing-script text-white">
          Fast Food
        </h2>
      </div>
      <nav className="mt-4">
        <Link
          to="/admin"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 hover:bg-gray-200 hover:text-gray-900 rounded"
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
          Dashboard
        </Link>
        <Link
          to="/admin/categories"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-200 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faTags} className="mr-2" />
          Categories
        </Link>
        <Link
          to="/admin/products"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-200 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faBox} className="mr-2" />
          Products
        </Link>
        <Link
          to="#"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-200 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
          Orders
        </Link>
        <Link
          to="#"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-200 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          Users
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
