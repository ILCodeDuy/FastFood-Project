import React from "react";

const Order = () => {
  return (
      <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
        <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">Đặt Hàng</h2>
        <div className="mt-8">
          <form>
            <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">Tên người nhận</label>
            <input
              type="text"
              name="recipientName"
              className="block w-full h-11 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
              placeholder="Tên của bạn"
            />

            <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">Địa chỉ nhận hàng</label>
            <input
              type="text"
              name="address"
              className="block w-full h-11 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
              placeholder="Địa chỉ của bạn"
            />

            <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              className="block w-full h-11 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
              placeholder="Số điện thoại của bạn"
            />

            <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">Ghi chú</label>
            <textarea
              name="note"
              className="block w-full h-24 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
              placeholder="Ghi chú (nếu có)"
            ></textarea>

            <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">Phương thức thanh toán</label>
            <select
              name="selectedPaymentMethod"
              className="block w-full h-11 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-gray-400"
            >
              <option value="cart">Cart</option>
            </select>

            <div className="flex items-center justify-between py-8">
              <p className="font-medium text-xl leading-8 text-black">Tổng Tiền:</p>
              <p className="font-semibold text-xl leading-8 text-indigo-600">giá VNĐ</p>
            </div>
            <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
              Thanh Toán
            </button>
          </form>
        </div>
      </div>
  );
};

export default Order;
