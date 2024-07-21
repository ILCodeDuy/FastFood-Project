import React from "react";
import { reduxForm, Field } from "redux-form";

const CategoryForm = ({ handleSubmit, onSuccess, onCancel }) => {
  const onSubmit = (formValues) => {
    fetch("http://localhost:3001/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Category added:", data);
        onSuccess();
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="categoryName">Category Name:</label>
        <Field
          name="categoryName"
          component="input"
          type="text"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="modal-action flex justify-between mt-6">
        <button type="submit" className="btn btn-primary">
          Add Category
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "categoryForm",
})(CategoryForm);
