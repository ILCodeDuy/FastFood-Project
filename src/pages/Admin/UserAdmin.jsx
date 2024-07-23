import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/Admin/SideBar/SideBar";
import TopNavBar from "../../components/Admin/TopNavBar/TopNavBar";

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch user data from the server
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
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
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
      <SideBar />
      <div className="flex-1 p-5">
        <TopNavBar />
        <div className="mt-10">
          <h1 className="text-3xl text-gray-800 mb-5">Khách Hàng</h1>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Tài khoản</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Tên Người Dùng</th>
                <th className="py-2 px-4 border-b">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-gray-700">
                  <td className="py-2 px-4 border-b text-center">{user.id}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {user.username}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {user.email}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {user.hoten}
                  </td>
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
                      <i className="fa-solid fa-eye"></i> Xem
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
                <h2 className="text-xl font-bold">Chi tiết Người Dùng</h2>
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
                <p className="mb-4">
                  <b>ID:</b> {selectedUser.id}
                </p>
                <p className="mb-4">
                  <b>Tài khoản:</b> {selectedUser.username}
                </p>
                <p className="mb-4">
                  <b>Email:</b> {selectedUser.email}
                </p>
                <p className="mb-4">
                  <b>Tên Người Dùng:</b> {selectedUser.hoten}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAdmin;
