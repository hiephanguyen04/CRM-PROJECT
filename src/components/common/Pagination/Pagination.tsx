// src/components/common/Pagination/Pagination.tsx
import React, { useEffect, useState } from "react";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
}

/**
 * Composant de pagination réutilisable
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pageSize,
  total,
  onChange,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50, 100],
  showQuickJumper = true,
  showSizeChanger = true,
  disabled = false,
  hideOnSinglePage = false,
  showTotal,
}) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const [jumpValue, setJumpValue] = useState(currentPage.toString());

  // Mise à jour du champ de saut lorsque la page courante change
  useEffect(() => {
    setJumpValue(currentPage.toString());
  }, [currentPage]);

  // Si une seule page et hideOnSinglePage est activé, ne pas afficher la pagination
  if (hideOnSinglePage && totalPages <= 1) {
    return null;
  }

  // Calculer la plage d'éléments affichés
  const getRange = (): [number, number] => {
    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(currentPage * pageSize, total);
    return [startIndex, endIndex];
  };

  // Gestionnaire de clic sur la page
  const handlePageClick = (page: number) => {
    if (disabled) return;
    if (page < 1 || page > totalPages) return;
    onChange(page);
  };

  // Gestionnaire de changement de taille de page
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (disabled) return;
    const newSize = parseInt(e.target.value, 10);
    onPageSizeChange?.(newSize);
  };

  // Gestionnaire de saut de page
  const handleJump = () => {
    if (disabled) return;
    const page = parseInt(jumpValue, 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      onChange(page);
    } else {
      setJumpValue(currentPage.toString());
    }
  };

  // Gestionnaire de changement dans le champ de saut
  const handleJumpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJumpValue(e.target.value);
  };

  // Gestionnaire de touche appuyée dans le champ de saut
  const handleJumpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleJump();
    }
  };

  // Générer les boutons de pagination
  const renderPaginationItems = () => {
    const items = [];
    const maxVisible = 7; // Nombre maximal de boutons de page visibles

    if (totalPages <= maxVisible) {
      // Afficher toutes les pages
      for (let i = 1; i <= totalPages; i++) {
        items.push(renderPageButton(i));
      }
    } else {
      // Stratégie de pagination avec ellipses
      const showLeftEllipsis = currentPage > 3;
      const showRightEllipsis = currentPage < totalPages - 2;

      // Première page
      items.push(renderPageButton(1));

      // Ellipse de gauche ou pages
      if (showLeftEllipsis) {
        items.push(
          <button
            key="left-ellipsis"
            className="pagination-ellipsis"
            disabled={disabled}
            onClick={() => handlePageClick(Math.max(1, currentPage - 5))}
          >
            ...
          </button>
        );
      } else {
        // Afficher les pages 2 et 3
        for (let i = 2; i <= Math.min(3, totalPages - 1); i++) {
          items.push(renderPageButton(i));
        }
      }

      // Pages autour de la page courante
      if (showLeftEllipsis && showRightEllipsis) {
        const start = Math.max(currentPage - 1, 2);
        const end = Math.min(currentPage + 1, totalPages - 1);
        for (let i = start; i <= end; i++) {
          items.push(renderPageButton(i));
        }
      }

      // Ellipse de droite ou pages
      if (showRightEllipsis) {
        items.push(
          <button
            key="right-ellipsis"
            className="pagination-ellipsis"
            disabled={disabled}
            onClick={() =>
              handlePageClick(Math.min(totalPages, currentPage + 5))
            }
          >
            ...
          </button>
        );
      } else {
        // Afficher les pages avant la dernière
        for (let i = Math.max(2, totalPages - 2); i < totalPages; i++) {
          items.push(renderPageButton(i));
        }
      }

      // Dernière page
      if (totalPages > 1) {
        items.push(renderPageButton(totalPages));
      }
    }

    return items;
  };

  // Rendu d'un bouton de page
  const renderPageButton = (page: number) => {
    return (
      <button
        key={page}
        className={`pagination-item ${
          currentPage === page ? "pagination-active" : ""
        }`}
        onClick={() => handlePageClick(page)}
        disabled={disabled}
      >
        {page}
      </button>
    );
  };

  return (
    <div className={`pagination ${disabled ? "pagination-disabled" : ""}`}>
      <div className="pagination-total">
        {showTotal && showTotal(total, getRange())}
        {!showTotal && (
          <>
            {getRange()[0]}-{getRange()[1]} sur {total} éléments
          </>
        )}
      </div>

      <div className="pagination-actions">
        {/* Bouton première page */}
        <button
          className="pagination-nav-button"
          onClick={() => handlePageClick(1)}
          disabled={disabled || currentPage === 1}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Bouton page précédente */}
        <button
          className="pagination-nav-button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={disabled || currentPage === 1}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Boutons de pagination */}
        <div className="pagination-items">{renderPaginationItems()}</div>

        {/* Bouton page suivante */}
        <button
          className="pagination-nav-button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={disabled || currentPage === totalPages}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Bouton dernière page */}
        <button
          className="pagination-nav-button"
          onClick={() => handlePageClick(totalPages)}
          disabled={disabled || currentPage === totalPages}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {showQuickJumper && (
        <div className="pagination-jumper">
          <input
            type="text"
            value={jumpValue}
            onChange={handleJumpChange}
            onBlur={handleJump}
            onKeyDown={handleJumpKeyDown}
            disabled={disabled}
          />
          <span>de {totalPages}</span>
        </div>
      )}

      {showSizeChanger && (
        <div className="pagination-size-changer">
          <span>Éléments par page</span>
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            disabled={disabled}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Pagination;
