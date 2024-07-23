import React, { useState, useEffect } from "react";
import axios from "axios";

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name || "",
      phone: user.phone || "",
      address: user.address || "",
      email: user.email || "",
      password: user.password ||"",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      await axios.put(`http://localhost:3001/api/user/${selectedUser.id}`, formData);
      // Refresh user data
      const response = await axios.get("http://localhost:3001/api/users");
      setUsers(response.data);
      closeModal();
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Failed to update user");
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/api/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 p-5">
        <div className="mt-10">
          <h1 className="text-3xl text-gray-800 mb-5">Khách Hàng</h1>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Tài Khoản</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Tên Người Dùng</th>
                <th className="py-2 px-4 border-b">Số Điện Thoại</th>
                <th className="py-2 px-4 border-b">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-gray-700">
                  <td className="py-2 px-4 border-b text-center">{user.id}</td>
                  <td className="py-2 px-4 border-b text-center">{user.username}</td>
                  <td className="py-2 px-4 border-b text-center">{user.email}</td>
                  <td className="py-2 px-4 border-b text-center">{user.name}</td>
                  <td className="py-2 px-4 border-b text-center">{user.phone}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(user.id)}
                    >
                      <i className="fa-solid fa-trash"></i> Xóa
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                      onClick={() => openModal(user)}
                    >
                      Xem
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold">Cập Nhật Người Dùng</h2>
                <button className="text-gray-500" onClick={closeModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Tên Người Dùng
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Số Điện Thoại
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 mb-2">
                    Địa Chỉ
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 mb-2">
                    Mật Khẩu
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleUpdate}
                >
                  Cập Nhật
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAdmin;
