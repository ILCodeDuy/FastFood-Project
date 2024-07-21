import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoriesAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAddCategory = async () => {
    try {
      await axios.post("/api/categories", { categoryName });
      setCategoryName("");
      fetchCategories();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleEditCategory = async (category) => {
    setEditingCategory(category);
    setCategoryName(category.categoryName);
  };

  const handleUpdateCategory = async () => {
    try {
      await axios.put(`/api/categories/${editingCategory.id}`, { categoryName });
      setCategoryName("");
      setEditingCategory(null);
      fetchCategories();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`/api/categories/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="h-full">
      <div className="flex justify-between">
        <div className="font-semibold text-xl">
          <h3>Categories</h3>
        </div>
        <button className="btn bg-blue-500" onClick={() => setEditingCategory(null)}>
          Add Category
        </button>
      </div>

      <div className="bg-white rounded-xl p-1 mt-6">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.categoryName}</td>
                  <td>
                    <button className="btn bg-yellow-300 text-white mr-4" onClick={() => handleEditCategory(category)}>
                      Edit
                    </button>
                    <button className="btn bg-red-500 text-white" onClick={() => handleDeleteCategory(category.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="text-3xl font-semibold mb-6">{editingCategory ? "Edit Category" : "Add Category"}</h3>
        <div className="modal-action w-full">
          <form className="w-full space-y-4">
            <div>
              <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                Category Name:
              </label>
              <input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="modal-action flex justify-between mt-6">
              <button type="button" className="btn btn-primary" onClick={editingCategory ? handleUpdateCategory : handleAddCategory}>
                {editingCategory ? "Update Category" : "Add Category"}
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => setEditingCategory(null)}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoriesAdmin;
