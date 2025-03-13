// src/components/common/Table/Table.tsx
import React, { ReactNode } from "react";
import "./Table.css";

export interface Column<T> {
  key: string;
  title: React.ReactNode;
  render?: (record: T, index: number) => React.ReactNode;
  width?: string | number;
  align?: "left" | "center" | "right";
  className?: string;
  sortable?: boolean;
  sortField?: string; // Champ pour le tri (si différent de key)
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowKey: string | ((record: T) => string);
  loading?: boolean;
  emptyText?: React.ReactNode;
  onRowClick?: (record: T, index: number) => void;
  rowClassName?: string | ((record: T, index: number) => string);
  selectedRowKeys?: string[];
  onSelectRow?: (selectedRowKeys: string[]) => void;
  sortField?: string;
  sortDirection?: "asc" | "desc";
  onSort?: (field: string, direction: "asc" | "desc") => void;
  footer?: ReactNode;
  header?: ReactNode;
}

/**
 * Composant de table générique réutilisable
 */
function Table<T extends Record<string, any>>({
  columns,
  data,
  rowKey,
  loading = false,
  emptyText = "Aucune donnée",
  onRowClick,
  rowClassName,
  selectedRowKeys = [],
  onSelectRow,
  sortField,
  sortDirection = "asc",
  onSort,
  footer,
  header,
}: TableProps<T>) {
  // Déterminer la clé de ligne pour chaque enregistrement
  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === "function") {
      return rowKey(record);
    }
    return record[rowKey] as string;
  };

  // Gérer la sélection de toutes les lignes
  const handleSelectAll = () => {
    if (!onSelectRow) return;

    if (selectedRowKeys.length === data.length) {
      onSelectRow([]);
    } else {
      onSelectRow(data.map((record, index) => getRowKey(record, index)));
    }
  };

  // Gérer la sélection d'une ligne
  const handleSelectRow = (key: string) => {
    if (!onSelectRow) return;

    if (selectedRowKeys.includes(key)) {
      onSelectRow(selectedRowKeys.filter((k) => k !== key));
    } else {
      onSelectRow([...selectedRowKeys, key]);
    }
  };

  // Gérer le tri
  const handleSort = (field: string) => {
    if (!onSort) return;

    if (field === sortField) {
      onSort(field, sortDirection === "asc" ? "desc" : "asc");
    } else {
      onSort(field, "asc");
    }
  };

  // Générer la class name pour une ligne
  const getRowClassName = (record: T, index: number): string => {
    let className = "table-row";

    if (typeof rowClassName === "function") {
      className += ` ${rowClassName(record, index)}`;
    } else if (rowClassName) {
      className += ` ${rowClassName}`;
    }

    if (selectedRowKeys.includes(getRowKey(record, index))) {
      className += " row-selected";
    }

    return className;
  };

  return (
    <div className={`table-container ${loading ? "loading" : ""}`}>
      {header && <div className="table-header-container">{header}</div>}

      <div className="table-wrapper">
        <table className="table">
          <thead className="table-head">
            <tr>
              {onSelectRow && (
                <th className="table-cell table-selection-cell">
                  <input
                    type="checkbox"
                    checked={
                      data.length > 0 && selectedRowKeys.length === data.length
                    }
                    onChange={handleSelectAll}
                  />
                </th>
              )}

              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`
                    table-cell
                    ${column.align ? `text-${column.align}` : ""}
                    ${column.className || ""}
                    ${column.sortable ? "sortable-column" : ""}
                    ${
                      column.sortable && column.sortField === sortField
                        ? `sorted-${sortDirection}`
                        : ""
                    }
                  `}
                  style={{ width: column.width }}
                  onClick={() =>
                    column.sortable &&
                    handleSort(column.sortField || column.key)
                  }
                >
                  <div className="table-cell-content">
                    {column.title}

                    {column.sortable && (
                      <div className="sort-icon">
                        {column.sortField === sortField ? (
                          sortDirection === "asc" ? (
                            <svg width="14" height="14" viewBox="0 0 24 24">
                              <path d="M7 14l5-5 5 5z" fill="currentColor" />
                            </svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24">
                              <path d="M7 10l5 5 5-5z" fill="currentColor" />
                            </svg>
                          )
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24">
                            <path
                              d="M7 10l5 5 5-5H7zm5-5l-5 5h10l-5-5z"
                              fillOpacity="0.3"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="table-body">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (onSelectRow ? 1 : 0)}
                  className="table-empty-cell"
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              data.map((record, index) => (
                <tr
                  key={getRowKey(record, index)}
                  className={getRowClassName(record, index)}
                  onClick={
                    onRowClick ? () => onRowClick(record, index) : undefined
                  }
                >
                  {onSelectRow && (
                    <td
                      className="table-cell table-selection-cell"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={selectedRowKeys.includes(
                          getRowKey(record, index)
                        )}
                        onChange={() =>
                          handleSelectRow(getRowKey(record, index))
                        }
                      />
                    </td>
                  )}

                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`
                        table-cell
                        ${column.align ? `text-${column.align}` : ""}
                        ${column.className || ""}
                      `}
                    >
                      {column.render
                        ? column.render(record, index)
                        : record[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {footer && <div className="table-footer">{footer}</div>}

      {loading && (
        <div className="table-loading-mask">
          <div className="table-loading-indicator">
            <div className="spinner"></div>
            <span>Chargement...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
