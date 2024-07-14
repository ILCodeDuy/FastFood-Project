import React, { useState, useEffect } from "react";

const Account = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      console.log(storedUser)
      setUser(storedUser);
    }, []);
  
  return (
    <div>
      {user && (
        <div className="bg-white shadow-md rounded p-6">
          <h4 className="text-xl font-semibold mb-4">THÔNG TIN CÁ NHÂN</h4>
          <form>
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
                onChange={(e) =>
                  setUser({ ...user, username: e.target.value })
                }
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
                name="number-phone"
                placeholder="Số Điện Thoại"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                value={user.phone || ""}
                onChange={(e) =>
                  setUser({ ...user, phone: e.target.value })
                }
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
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value })
                }
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
                onChange={(e) =>
                  setUser({ ...user, address: e.target.value })
                }
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Account;
