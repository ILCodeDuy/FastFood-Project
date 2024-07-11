import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from '../../assets/img';

const Header = () => {
  return (
    <div className="w-screen h-52">
      <div className="flex center items-center z-50 relative top-0">
        <div className="size-48 mx-32">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="mr-20">
          <ul className="flex lg:menu-horizontal text-base">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "mr-6 text-yellow-500" : "mr-6 text-white"
                }
              >
                TRANG CHỦ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "mr-6 text-yellow-500" : "mr-6 text-white"
                }
              >
                THỰC ĐƠN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about" // Update the path as necessary
                className={({ isActive }) =>
                  isActive ? "mr-6 text-yellow-500" : "mr-6 text-white"
                }
              >
                VỀ CHÚNG TÔI
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="ml-20 flex items-center">
          <i className="fa fa-search text-2xl mr-10 text-white cursor-pointer"></i>
          <NavLink to="/profile">
            <i className="fa fa-user text-2xl mr-10 text-white cursor-pointer"></i>
          </NavLink>
          <div className="flex-none">
            <Link to="/cart">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex="0"
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item text-white bg-red-500 size-5">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
