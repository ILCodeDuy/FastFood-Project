import React, { useState, useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories
    fetch("http://localhost:3001/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data); // Lưu danh sách danh mục từ API vào state
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  return (
    <div>
      <label className="ml-32">Chọn danh mục:</label>
      <select
        defaultValue="default"
        className="select select-bordered w-full max-w-xs ml-4"
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
