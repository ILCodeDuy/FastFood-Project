import React, { useState, useEffect } from "react";
import Pagination from "../../components/Products/Pagination";
import CategoryForm from "../../components/Admin/CategoryForm/CategoryForm";
import CategoryEditForm from "../../components/Admin/CategoryForm/CategoryEditForm";
import { useDispatch } from "react-redux";
import { reset } from "redux-form";
import TitlePage from "../../components/Admin/TitlePage/TitlePage";

const CategoriesAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(10); 
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/categories");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCategoryId(null);
  };

  const handleAddCategory = () => {
    dispatch(reset("categoryForm"));
    closeModal();
    window.location.reload();
  };

  const handleEditCategory = () => {
    closeEditModal();
    window.location.reload();
  };

  const handleDeleteCategory = async (categoryId) => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xoá danh mục này không?");
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/api/categories/${categoryId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("API Response:", data);
      setCategories(categories.filter((category) => category.id !== categoryId));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const totalPages = Math.ceil(categories.length / categoriesPerPage);
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="h-full">
      <TitlePage titleName={'Categories'} openModal={openModal}/>

      {/* Modal for adding category */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box w-11/12 max-w-5xl bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-3xl font-semibold mb-6">Add Category</h3>
            <CategoryForm onSuccess={handleAddCategory} onCancel={closeModal} />
          </div>
        </div>
      )}

      {/* Modal for editing category */}
      {isEditModalOpen && selectedCategoryId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box w-11/12 max-w-5xl bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-3xl font-semibold mb-6">Edit Category</h3>
            <CategoryEditForm
              categoryId={selectedCategoryId}
              onSuccess={handleEditCategory}
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
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCategories.map((category, index) => (
                <tr key={category.id} className="border-b-[1px]">
                  <td className="px-4 py-2 text-center">
                    {indexOfFirstCategory + index + 1}
                  </td>
                  <td className="px-4 py-2">{category.categoryName}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="btn bg-yellow-300 text-white mr-4"
                      onClick={() => openEditModal(category.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn bg-red-500 text-white"
                      onClick={() => handleDeleteCategory(category.id)}
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

export default CategoriesAdmin;
