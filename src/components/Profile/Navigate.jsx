import React from "react";
import { NavLink } from "react-router-dom";

const Navigate = () => {
  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className="w-1/6">
      <ul>
        <li className="py-2">
          <NavLink to="/profile">Tài Khoản</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/profile/order">Hoá Đơn</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/profile/edit-user">Cài Đặt</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/login" onClick={logout}>
            Đăng Xuất
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigate;    
