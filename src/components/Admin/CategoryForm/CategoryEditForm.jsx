import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import { useDispatch } from "react-redux";
import { initialize } from "redux-form";

const CategoryEditForm = ({ handleSubmit, categoryId, onSuccess, onCancel, errorMessage, successMessage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/categories/${categoryId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(initialize("categoryEditForm", data)); // Initialize form with fetched data
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId, dispatch]);

  const onSubmit = async (formValues) => {
    try {
      const response = await fetch(`http://localhost:3001/api/categories/${categoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Category updated:", data);
      onSuccess();
    } catch (error) {
      console.error("Error updating category:", error);
      errorMessage("Error updating category. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}

      <div>
        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">Category Name:</label>
        <Field
          name="categoryName"
          component="input"
          type="text"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "categoryEditForm",
})(CategoryEditForm);
