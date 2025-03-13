// src/pages/Contacts/components/Pagination.tsx
import React, { useState } from "react";

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [pageInputValue, setPageInputValue] = useState(
    currentPage.toString().padStart(2, "0")
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPageInputValue(value);
  };

  const handlePageInputBlur = () => {
    let pageNum = parseInt(pageInputValue, 10);

    if (isNaN(pageNum) || pageNum < 1) {
      pageNum = 1;
    } else if (pageNum > totalPages) {
      pageNum = totalPages;
    }

    setPageInputValue(pageNum.toString().padStart(2, "0"));
    onPageChange(pageNum);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlePageInputBlur();
    }
  };

  return (
    <div className="pagination">
      <div className="per-page">
        <span>Éléments par page</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(parseInt(e.target.value, 10))}
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <div className="page-info">
        {startItem}-{endItem} sur {totalItems} éléments
      </div>

      <div className="page-controls">
        <button
          className="page-button first"
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          className="page-button prev"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className="page-number">
          <input
            type="text"
            value={pageInputValue}
            onChange={handlePageInputChange}
            onBlur={handlePageInputBlur}
            onKeyDown={handleKeyDown}
          />
          <span>de {totalPages}</span>
        </div>

        <button
          className="page-button next"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          className="page-button last"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
