import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import imagePaths from "../../assets/menu/menu";
import { CartContext } from "../../Service/Cart/cartService";
import { formatCurrency } from "../../utils/formatCurrency";
import axios from "axios";

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const plus = faPlus;
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(9); // Initial number of products to display
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product details
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    fetch("http://localhost:3001/api/data")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Save API results in products state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Use empty array to call API only once after component is rendered

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 6); // Increase the number of displayed products by 6
  };

  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/products/${productId}`);
      setSelectedProduct(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center dancing-script text-slate-950 text-5xl">
        Our Menu
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
            <span className="font-bold mt-20">Giá: {formatCurrency(product.price)}</span>
            <p className="font-bold mt-4">
              Số lượng còn lại: {product.quantity}
            </p>
            <button
              className="bg-yellow-400 p-3 rounded-full w-12 relative left-48 bottom-16"
              onClick={() => addToCart(product)}
            >
              <FontAwesomeIcon
                icon={plus}
                className="text-white text-xl text-center cursor-pointer"
              />
            </button>
            <button
              className="bg-teal-800 border-2 p-1 border-slate-950 hover:border-gray-100 rounded-full w-32 mt-6"
              onClick={() => fetchProductDetails(product.id)}
            >
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

      {/* Modal for product details */}
      {isModalOpen && selectedProduct && (
        <div id="productModal" className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="w-[800px] align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
              <div className="w-[800px] bg-yellow-200 p-6">
                <div className="flex justify-end">
                  <button onClick={closeModal} className="text-gray-500 text-3xl hover:text-gray-700">&times;</button>
                </div>
                <div className="flex">
                  <img src={imagePaths[selectedProduct.img]} className="w-1/2 h-86 object-cover rounded mr-4" alt={selectedProduct.name} />
                  <div className="w-1/2">
                    <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                    <p className="mt-4"><strong>Giá:</strong> {formatCurrency(selectedProduct.price)}</p>
                    <p className="mt-2"><strong>Số lượng còn lại:</strong> {selectedProduct.quantity}</p>
                    <p className="mt-2"><strong>Mô tả:</strong> {selectedProduct.description}</p>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => addToCart(selectedProduct)}>Mua</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
