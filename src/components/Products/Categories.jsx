import React from "react";

const Categories = ({ categories, onCategoryChange }) => {
  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    onCategoryChange(categoryId);
  };

  return (
    <div className="mb-10">
      <label className="ml-32">Chọn danh mục:</label>
      <select
        defaultValue="default"
        className="select select-bordered w-full max-w-xs ml-4"
        onChange={handleCategoryChange}
      >
        <option value="default" disabled>
          Chọn danh mục
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
