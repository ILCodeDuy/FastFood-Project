import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="p-20 mt-14">
        <div className="wp-block-cover__inner-container">
          <h1 className="text-left text-7xl font-text-login">Register</h1>
          <p className="font-text-login mt-6 text-gray-700 text-xl">
            Enjoy fresh &amp; favorite food everyday.
          </p>
        </div>
        <div className="border-b-2 border-gray-600 mt-10"></div>
      </div>

      <div className="pl-20 pr-20 pb-20 mb-20 text-center">
        <div className="w-[640px] mx-auto">
          <div className="mt-6">
            <ul className="flex font-semibold">
              <li className="w-[320px] p-6 border-b-[1px] border-gray-400">
                <a href="/login">Login</a>
              </li>
              <li className="w-[320px] p-6 border-b-[1px] border-gray-800">
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <label
              htmlFor="username"
              className="block float-left text-gray-700 text-sm mb-2"
            >
              Username *
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border border-gray-300 rounded w-[640px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="password"
              className="block float-left text-gray-700 text-sm mb-2"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border border-gray-300 rounded w-[640px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="confirmPassword"
              className="block float-left text-gray-700 text-sm mb-2"
            >
              Confirm Password *
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow appearance-none border border-gray-300 rounded w-[640px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-6">
            <button className="btn w-full bg-gray-800 text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
