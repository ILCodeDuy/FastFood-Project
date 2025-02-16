import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Categories from "./Categories";
import Pagination from "./Pagination";
import imagePaths from "../../assets/menu/menu";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartContext } from '../../Service/Cart/cartService';
const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const plus = faPlus;
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('search') || "";
    fetchProducts(selectedCategory, searchTerm);
  }, [selectedCategory, location.search]);

  const fetchProducts = (categoryId, keyword) => {
    let apiUrl = "http://localhost:3001/api/data";
    const queryParams = new URLSearchParams();
    if (categoryId) queryParams.append('categoryId', categoryId);
    if (keyword) queryParams.append('keyword', keyword);
    if (queryParams.toString()) apiUrl += `?${queryParams.toString()}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };


  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center dancing-script text-slate-950 text-5xl p-6">
        Menu
      </h2>
      <Categories categories={categories} onCategoryChange={handleCategoryChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="p-6 h-box rounded-2xl bg-gray-900 text-white"
          >
            <img
              className="w-full h-48 rounded-3xl hover:scale-105 object-cover"
              src={imagePaths[product.img]}
              alt={product.name}
            />
            <h2 className="text-3xl pb-4 dancing-script mt-4 mb-2">{product.name}</h2>
            <span className="font-bold">Giá: {formatCurrency(product.price)}</span>
            <p className="font-bold mt-2">Số lượng còn lại: {product.quantity}</p>
            <button
              className="bg-yellow-400 p-3 rounded-full w-12 relative left-48 bottom-16"
              onClick={() => addToCart(product)}
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
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </div>
  );
};

export default Menu;
