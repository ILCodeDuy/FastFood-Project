import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
const Admin = () => {
  return (
    <div className="flex bg-gray-100">
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
            Dashboard
          </Link>
          <Link
            to="/admin/categories"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-200 hover:text-gray-900"
          >
            Categories
          </Link>
          <Link
            to="/admin/products"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-200 hover:text-gray-900"
          >
            Products
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-200 hover:text-gray-900"
          >
            Orders
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-200 hover:text-gray-900"
          >
            Users
          </Link>
        </nav>
      </div>
      <div className="flex-1 flex flex-col ml-64">
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-800 text-xl font-bold">
                  Admin Dashboard
                </span>
              </div>
              <div>
                <button className="text-gray-500 focus:outline-none">
                  <i className="fas fa-bell"></i>
                </button>
                <button className="ml-4 text-gray-500 focus:outline-none">
                  <i className="fas fa-user"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="p-6 h-screen">
            <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Admin;
