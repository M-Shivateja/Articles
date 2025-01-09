import React from "react";

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-4 mb-4 sm:mt-8 sm:mb-8">
      <button
        className="px-3 py-2 bg-primary/20 rounded-md hover:bg-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-2 text-sm sm:text-base ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-primary/20 hover:bg-primary/50"
            } rounded-md`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        className="px-3 py-2 bg-primary/20 rounded-md hover:bg-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
