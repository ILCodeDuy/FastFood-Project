import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(`http://localhost:3001/api/user/${storedUser.id}`); // Replace with your actual API endpoint
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/api/user/${user.id}`, user);
      console.log("Cập nhật thành công");
      navigate("/profile");
    } catch (error) {
      console.error("Lỗi cập nhật user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  if (!user) return null; // Optionally handle loading state

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h4 className="text-xl font-semibold mb-4">THÔNG TIN CÁ NHÂN</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Họ Tên
          </label>
          <input
            id="username"
            name="username"
            placeholder="Họ Tên"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="number-phone"
            className="block text-sm font-medium text-gray-700"
          >
            Số Điện Thoại
          </label>
          <input
            id="number-phone"
            name="phone"
            placeholder="Số Điện Thoại"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Mật Khẩu
          </label>
          <input
            id="password"
            name="password"
            placeholder="password"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Địa Chỉ
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Địa Chỉ"
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={user.address || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cập Nhật
        </button>
      </form>
    </div>
  );
};

export default EditUser;
