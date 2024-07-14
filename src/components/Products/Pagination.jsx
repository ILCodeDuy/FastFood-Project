import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-12 pb-12">
      <ul className="pagination flex">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item cursor-pointer p-3 mr-2 ${number === currentPage ? 'bg-gray-400' : 'bg-gray-200'}`}
            onClick={() => onPageChange(number)}
          >
            <div className="cursor-pointer">{number}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
