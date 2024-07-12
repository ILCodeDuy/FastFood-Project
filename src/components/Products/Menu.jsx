import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Categories from "./Categories";
import Pagination from "./Pagination";

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products
    fetch("http://localhost:3001/api/data")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Lưu danh sách sản phẩm từ API vào state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Sử dụng mảng rỗng để chỉ gọi API một lần sau khi component được render

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center dancing-script text-slate-950 text-5xl p-6">
        Menu
      </h2>
      <Categories/>
      <div className="mx-20 flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="p-6 mx-12 mt-6 h-box w-72 rounded-2xl bg-gray-900">
            <img
              className="w-64 h-48 rounded-3xl hover:scale-105"
              src={product.image} // Thay thế bằng đường dẫn hình ảnh từ API
              alt={product.name}
            />
            <h2 className="text-3xl dancing-script mt-4 mb-5">{product.name}</h2>
            <span className="font-bold mt-20">Giá: {product.price} VNĐ</span>
            <p className="font-bold mt-4">Số lượng còn lại: {product.quantity}</p>
            <button className="bg-yellow-400 p-3 rounded-full w-12 relative left-48 bottom-16">
              <FontAwesomeIcon
                icon={faPlus}
                className="text-white text-xl text-center cursor-pointer"
              />
            </button>
            <button className="bg-teal-800 border-2 p-1 border-slate-950 hover:border-gray-100 rounded-full w-32 mt-6">
              Chi tiết
            </button>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Menu;
