import React, { useState, useEffect } from "react";
import imagePaths from "../../assets/menu/menu";
import Pagination from "../../components/Products/Pagination";
import ProductForm from "../../components/Admin/ProductForm/ProductForm";
import ProductEditForm from "../../components/Admin/ProductForm/ProductEditForm"; // Import the edit form
import { useDispatch } from "react-redux";
import { reset } from "redux-form";
import { formatCurrency } from "../../utils/formatCurrency";

const ProductsAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit modal
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Adjust based on your preference
  const [selectedProductId, setSelectedProductId] = useState(null); // State for selected product ID
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data); // Save API results in products state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (productId) => {
    setSelectedProductId(productId);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProductId(null); // Clear selected product ID
  };

  const handleAddProduct = () => {
    dispatch(reset("productForm"));
    closeModal();
    window.location.reload();
  };

  const handleEditProduct = () => {
    closeEditModal();
    window.location.reload(); // Refresh the product list after edit
  };

  const handleDeleteProduct = async (productId) => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?");
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/api/data/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("API Response:", data);
      // Update the state to remove the deleted product
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="h-full">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-xl">Products</h3>
        <button className="btn bg-blue-500 text-white" onClick={openModal}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-[1.4rem]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Circle_Plus">
              <g>
                <path d="M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"></path>
                <path d="M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>

      {/* Modal for adding product */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box w-11/12 max-w-5xl bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-3xl font-semibold mb-6">Add Product</h3>
            <ProductForm onSuccess={handleAddProduct}  onCancel={closeModal}/>
          </div>
        </div>
      )}

      {/* Modal for editing product */}
      {isEditModalOpen && selectedProductId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box w-11/12 max-w-5xl bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-3xl font-semibold mb-6">Edit Product</h3>
            <ProductEditForm
              productId={selectedProductId}
              onSuccess={handleEditProduct}
              onCancel={closeEditModal}
            />
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-6 mt-6">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={product.id} className="border-b-[1px]">
                  <td className="px-4 py-2 text-center">
                    {indexOfFirstProduct + index + 1}
                  </td>
                  <td className="px-4 py-2 w-[300px]">{product.name}</td>
                  <td className="pl-5 py-2 ">
                    <img
                      src={imagePaths[product.img]}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">{product.quantity}</td>
                  <td className="px-4 py-2 text-center">{formatCurrency(product.price)}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="btn bg-yellow-300 text-white mr-4"
                      onClick={() => openEditModal(product.id)} // Open edit modal
                    >
                      Edit
                    </button>
                    <button
                      className="btn bg-red-500 text-white"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </div>
  );
};

export default ProductsAdmin;
