import React from "react";
import { NavLink } from "react-router-dom";

const Navigate = () => {
  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className="w-1/6 bg-gray-100 p-4 rounded-lg shadow-md">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/profile/user"
            className={({ isActive }) =>
              `block py-2 px-4 rounded-md text-lg font-semibold ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            Tài Khoản
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/order"
            className={({ isActive }) =>
              `block py-2 px-4 rounded-md text-lg font-semibold ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            Hoá Đơn
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/edit-user"
            className={({ isActive }) =>
              `block py-2 px-4 rounded-md text-lg font-semibold ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            Cài Đặt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            onClick={logout}
            className="block py-2 px-4 rounded-md text-lg font-semibold text-red-600 hover:bg-red-100"
          >
            Đăng Xuất
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigate;
