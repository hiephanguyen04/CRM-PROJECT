// src/hooks/useTable.ts
import { useEffect, useMemo, useState } from "react";

interface TableOptions<T> {
  data: T[];
  initialPageSize?: number;
  initialPage?: number;
  initialSortField?: keyof T | null;
  initialSortDirection?: "asc" | "desc";
  searchFields?: (keyof T)[];
  searchTerm?: string;
}

interface TableSortState<T> {
  field: keyof T | null;
  direction: "asc" | "desc";
}

interface TableState<T> {
  currentPage: number;
  pageSize: number;
  selectedIds: string[];
  sortState: TableSortState<T>;
  searchTerm: string;
  filteredData: T[];
  displayData: T[];
  totalItems: number;
  totalPages: number;
}

interface TableFunctions<T> {
  goToPage: (page: number) => void;
  setPageSize: (size: number) => void;
  selectItem: (id: string) => void;
  deselectItem: (id: string) => void;
  toggleItemSelection: (id: string) => void;
  isItemSelected: (id: string) => boolean;
  selectAll: () => void;
  deselectAll: () => void;
  toggleSelectAll: () => void;
  hasAllSelected: boolean;
  hasSomeSelected: boolean;
  sortByField: (field: keyof T) => void;
  setSearchTerm: (term: string) => void;
}

/**
 * Hook pour gérer les tables avec pagination, tri, sélection et recherche
 */
export function useTable<T extends { id: string }>(
  options: TableOptions<T>
): [TableState<T>, TableFunctions<T>] {
  const {
    data,
    initialPageSize = 25,
    initialPage = 1,
    initialSortField = null,
    initialSortDirection = "asc",
    searchFields = [],
    searchTerm: initialSearchTerm = "",
  } = options;

  // État
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortState, setSortState] = useState<TableSortState<T>>({
    field: initialSortField,
    direction: initialSortDirection,
  });
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  // Filtrer les données selon le terme de recherche
  const filteredData = useMemo(() => {
    if (!searchTerm || searchFields.length === 0) {
      return data;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return data.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        if (typeof value === "string") {
          return value.toLowerCase().includes(lowerSearchTerm);
        }
        if (typeof value === "number") {
          return value.toString().includes(lowerSearchTerm);
        }
        return false;
      })
    );
  }, [data, searchTerm, searchFields]);

  // Tri des données
  const sortedData = useMemo(() => {
    if (!sortState.field) {
      return filteredData;
    }

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortState.field!];
      const bValue = b[sortState.field!];

      if (aValue === bValue) return 0;

      const comparison = aValue < bValue ? -1 : 1;
      return sortState.direction === "asc" ? comparison : -comparison;
    });
  }, [filteredData, sortState]);

  // Pagination
  const totalItems = sortedData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Ajuster la page courante si elle dépasse le total de pages
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Données à afficher sur la page actuelle
  const displayData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  // Sélection
  const selectItem = (id: string) => {
    if (!selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const deselectItem = (id: string) => {
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
  };

  const toggleItemSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      deselectItem(id);
    } else {
      selectItem(id);
    }
  };

  const isItemSelected = (id: string) => selectedIds.includes(id);

  const selectAll = () => {
    setSelectedIds(sortedData.map((item) => item.id));
  };

  const deselectAll = () => {
    setSelectedIds([]);
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === sortedData.length) {
      deselectAll();
    } else {
      selectAll();
    }
  };

  const hasAllSelected =
    sortedData.length > 0 && selectedIds.length === sortedData.length;
  const hasSomeSelected =
    selectedIds.length > 0 && selectedIds.length < sortedData.length;

  // Tri
  const sortByField = (field: keyof T) => {
    setSortState((prev) => {
      if (prev.field === field) {
        // Inverser la direction si on trie par le même champ
        return {
          ...prev,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      } else {
        // Nouveau champ, commencer par le tri ascendant
        return {
          field,
          direction: "asc",
        };
      }
    });
  };

  // Navigation
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const changePageSize = (size: number) => {
    setPageSize(size);
    // Reset to first page when changing page size
    setCurrentPage(1);
  };

  const state: TableState<T> = {
    currentPage,
    pageSize,
    selectedIds,
    sortState,
    searchTerm,
    filteredData: sortedData,
    displayData,
    totalItems,
    totalPages,
  };

  const functions: TableFunctions<T> = {
    goToPage,
    setPageSize: changePageSize,
    selectItem,
    deselectItem,
    toggleItemSelection,
    isItemSelected,
    selectAll,
    deselectAll,
    toggleSelectAll,
    hasAllSelected,
    hasSomeSelected,
    sortByField,
    setSearchTerm,
  };

  return [state, functions];
}
