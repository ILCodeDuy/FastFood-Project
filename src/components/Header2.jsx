import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Logo } from '../assets/img';

const Header2 = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search term
  const navigate = useNavigate();

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  // Function to handle search action
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  return (
    <div className="h-32 border-b-[1px]">
      <div className="flex shadow h-32 items-center z-50">
        <div className="size-28 mx-16">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="mr-20">
          <ul className="flex lg:menu-horizontal text-base font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "mr-6 text-yellow-500" : "mr-6"
                }
              >
                TRANG CHỦ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "mr-6 text-yellow-500" : "mr-6"
                }
              >
                THỰC ĐƠN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "mr-6 text-yellow-500" : "mr-6"
                }
              >
                VỀ CHÚNG TÔI
              </NavLink>
            </li>
          </ul>
        </div>
        <label className="input input-bordered flex items-center gap-2 mx-8 w-[300px]">
          <input
            type="text"
            className="grow text-gray-700"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange} // Handle input change
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer text-gray-500"
            onClick={handleSearch} // Handle search action
          />
        </label>
        <div className="ml-36 flex items-center">
          <NavLink to="/login">
            <FontAwesomeIcon
              icon={faUser}
              className="hidden text-2xl mr-10 text-white cursor-pointer"
            />
          </NavLink>
          <NavLink to="/profile">
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl mr-10 cursor-pointer"
            />
          </NavLink>
          <div className="flex-none">
            <NavLink to="/cart">
              <div className="dropdown dropdown-end">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-7 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#000"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item text-black bg-red-500 rounded-full size-5">2</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
