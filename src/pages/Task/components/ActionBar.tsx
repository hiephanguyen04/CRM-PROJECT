// src/pages/Tasks/components/ActionBar.tsx
import React from "react";
import SelectFilter from "../../../components/common/Select/SelectFilter";
import { FilterOption } from "../../../types/contacts.types";

interface ActionBarProps {
  tasksCount: number;
  onSearch: (term: string) => void;
  searchTerm: string;
  filterOptions: {
    primary: FilterOption[];
    owner: FilterOption[];
  };
  selectedFilters: {
    primary: string;
    owner: string;
  };
  onFilterChange: (type: "primary" | "owner", value: string) => void;
  onNewTask: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({
  tasksCount,
  onSearch,
  searchTerm,
  filterOptions,
  selectedFilters,
  onFilterChange,
  onNewTask,
}) => {
  return (
    <div className="contacts-actions">
      <div className="leftAction">
        <button className="action-button add-contact" onClick={onNewTask}>
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
          </svg>
          Ajouter une tâche
        </button>

        <div className="contacts-count">
          <strong>{tasksCount}</strong> tâches
        </div>
      </div>

      <div className="filter-actions">
        <SelectFilter
          options={filterOptions.primary}
          value={selectedFilters.primary}
          onChange={(value) => onFilterChange("primary", value)}
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                fill="currentColor"
              />
            </svg>
          }
        />

        <SelectFilter
          options={filterOptions.owner}
          value={selectedFilters.owner}
          onChange={(value) => onFilterChange("owner", value)}
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="currentColor"
              />
            </svg>
          }
        />

        <div className="search-field">
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              fill="currentColor"
            />
          </svg>
          <input
            type="text"
            placeholder="Titre, contact, responsable..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <button className="setting">
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path
              d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
