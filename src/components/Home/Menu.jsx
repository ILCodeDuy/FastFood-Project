import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import imagePaths from "../../assets/menu/menu";
import { addToCart } from "../../Service/Cart/cartService";
const Menu = () => {
  const plus = faPlus;
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(9); // Số lượng sản phẩm ban đầu muốn hiển thị

  useEffect(() => {
    fetch("http://localhost:3001/api/data")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Lưu kết quả từ API vào state products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Sử dụng mảng rỗng để chỉ gọi API một lần sau khi component được render

  // Hàm xử lý khi người dùng muốn xem thêm sản phẩm
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 6); // Tăng số lượng sản phẩm hiển thị lên 6
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center dancing-script text-slate-950 text-5xl">
        Our Menu{" "}
      </h2>
      <div className="mt-24 mx-12 flex flex-wrap">
        {products.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="p-6 mx-12 mt-6 h-box w-72 rounded-2xl bg-gray-900 text-white"
          >
            <img
              className="w-64 h-48 rounded-3xl hover:scale-105"
              src={imagePaths[product.img]}
              alt={product.name}
            />
            <h2 className="text-3xl dancing-script mt-4 mb-10">
              {product.name}
            </h2>
            <span className="font-bold mt-20">{product.price} VNĐ</span>
            <p className="font-bold mt-4">
              Số lượng còn lại: {product.quantity}
            </p>
            <button
              className="bg-yellow-400 p-3 rounded-full w-12 relative left-48 bottom-16"
              onClick={() => handleAddToCart(product)}
            >
              <FontAwesomeIcon
                icon={plus}
                className="text-white text-xl text-center cursor-pointer"
              />
            </button>
            <button className="bg-teal-800 border-2 p-1 border-slate-950 hover:border-gray-100 rounded-full w-32 mt-6">
              Chi tiết
            </button>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className="btn mt-6 bg-gray-800 text-white hover:text-black"
          onClick={loadMoreProducts}
        >
          Xem Thêm
        </button>
      </div>
    </div>
  );
};

export default Menu;
