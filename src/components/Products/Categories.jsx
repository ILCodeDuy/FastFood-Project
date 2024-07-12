import React from "react";

const Categories = () => {
  return (
    <div>
      <label className="ml-32">Chọn danh mục:</label>
      <select defaultValue="default" className="select select-bordered w-full max-w-xs ml-4">
        <option value="default" disabled>
          Chọn danh mục
        </option>
        <option value="nuoc">Nước</option>
      </select>
    </div>
  );
};

export default Categories;
