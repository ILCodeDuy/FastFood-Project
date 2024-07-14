import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart, removeFromCart, addToCart as increaseQuantity, decreaseQuantity } from "../../Service/Cart/cartService"; // Import cart service functions
import imagePaths from "../../assets/menu/menu";
import { formatCurrency } from "../../utils/formatCurrency";

const Shopping = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = getCart();
    setCart(cartItems);
  }, []);

  const handleRemove = (productId) => {
    removeFromCart(productId);
    setCart(getCart()); // Update cart state after removal
  };

  const handleIncreaseQuantity = (product) => {
    increaseQuantity(product);
    setCart(getCart()); // Update cart state after increasing quantity
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      decreaseQuantity(product);
      setCart(getCart()); // Update cart state after decreasing quantity
    }
  };

  if (cart.length === 0) {
    return (
      <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
        <p className="text-center text-gray-600 text-xl font-semibold">
          Hiện tại chưa có sản phẩm nào trong giỏ hàng
        </p>
        <div className="flex items-center justify-end mt-8">
        <Link
          to="/products"
          className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700"
        >
          Thêm Sản Phẩm
          <svg
            className="transition-all duration-500 group-hover:translate-x-2"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
              stroke="#4F46E5"
              strokeWidth="1.6"
              strokeLinecap="round"
            ></path>
          </svg>
        </Link>
      </div>
      </div>
    );
  }

  return (
    <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
      <div className="flex items-center justify-between pb-8 border-b border-gray-300">
        <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
          Shopping Cart
        </h2>
        <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
          Sản Phẩm
        </h2>
      </div>
      <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
        <div className="col-span-12 md:col-span-7">
          <p className="font-normal text-lg leading-8 text-gray-400">Sản Phẩm</p>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="grid grid-cols-5">
            <div className="col-span-3">
              <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                Số Lượng
              </p>
            </div>
            <div className="col-span-2">
              <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                Thành Tiền
              </p>
            </div>
          </div>
        </div>
      </div>

      {cart.map((product) => (
        <div
          key={product.id}
          className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group"
        >
          <div className="w-full md:max-w-[126px]">
            <img src={imagePaths[product.img]} alt={product.name} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-semibold text-base leading-7 text-black">
                  {product.name}
                </h6>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                  {formatCurrency(product.price)}
                </h6>
                <h6 className="font-normal text-base leading-7 text-gray-500">
                  <button
                    className="text-red-500 hover:text-red-700 transition-all duration-300"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </h6>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button
                  className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                  onClick={() => handleDecreaseQuantity(product)}
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
                <input
                  type="text"
                  value={product.quantity}
                  className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                  readOnly
                />
                <button
                  className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                  onClick={() => handleIncreaseQuantity(product)}
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                {formatCurrency(product.price * product.quantity)}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-end mt-8">
        <Link
          to="/products"
          className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700"
        >
          Thêm Sản Phẩm
          <svg
            className="transition-all duration-500 group-hover:translate-x-2"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
              stroke="#4F46E5"
              strokeWidth="1.6"
              strokeLinecap="round"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Shopping;
