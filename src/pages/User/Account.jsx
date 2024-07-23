import React, { useState, useEffect } from "react";
import axios from "axios";

const Account = () => {
  const [user, setUser] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const response = await axios.get(`http://localhost:3001/api/user/${storedUser.id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
      // Handle error, show message, etc.
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      await axios.put(`http://localhost:3001/api/user/${storedUser.id}`, user);
      alert('User information updated successfully!');
      fetchUserData(); // Refresh the user data
    } catch (error) {
      console.error('Error updating user details:', error);
      // Handle error, show message, etc.
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {user ? (
        <div className="bg-white shadow-md rounded p-6">
          <h4 className="text-xl font-semibold mb-4">Thông Tin Cá Nhân</h4>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Họ Tên
              </label>
              <input
                id="name"
                name="name"
                placeholder="Họ Tên"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                value={user.name || ""}
                onChange={handleChange}
                disabled={!isUpdating}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Số Điện Thoại
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="Số Điện Thoại"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                value={user.phone || ""}
                onChange={handleChange}
                disabled={!isUpdating}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="Email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="email"
                value={user.email || ""}
                onChange={handleChange}
                disabled={!isUpdating}
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
                disabled={!isUpdating}
              />
            </div>
            <div className="flex justify-end space-x-4">
              {isUpdating ? (
                <>
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleUpdate}
                  >
                    Cập Nhật
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={() => setIsUpdating(false)}
                  >
                    Hủy
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsUpdating(true)}
                >
                  Chỉnh Sửa
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Account;
