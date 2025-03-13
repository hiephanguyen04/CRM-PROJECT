// src/pages/Tasks/components/TasksFilter.tsx
import React from "react";
import { TaskFilter } from "../../../types/tasks.types";

interface TasksFilterProps {
  selectedFilter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
}

const TasksFilter: React.FC<TasksFilterProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <div className="tasks-filter">
      <button
        className={`filter-button ${selectedFilter === "Tout" ? "active" : ""}`}
        onClick={() => onFilterChange("Tout")}
      >
        Tout
      </button>

      <div className="filter-separator"></div>

      <button
        className={`filter-button ${
          selectedFilter === "Appel" ? "active" : ""
        }`}
        onClick={() => onFilterChange("Appel")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24">
          <path
            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
            fill="currentColor"
          />
        </svg>
        Appel
      </button>

      <button
        className={`filter-button ${
          selectedFilter === "E-mail" ? "active" : ""
        }`}
        onClick={() => onFilterChange("E-mail")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24">
          <path
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            fill="currentColor"
          />
        </svg>
        E-mail
      </button>

      <button
        className={`filter-button ${
          selectedFilter === "À faire" ? "active" : ""
        }`}
        onClick={() => onFilterChange("À faire")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24">
          <path
            d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
            fill="currentColor"
          />
        </svg>
        À faire
      </button>

      <button
        className={`filter-button ${
          selectedFilter === "En retard" ? "active" : ""
        }`}
        onClick={() => onFilterChange("En retard")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24">
          <path
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
            fill="currentColor"
          />
        </svg>
        En retard
      </button>

      <div className="filter-separator"></div>

      <button
        className={`filter-button ${
          selectedFilter === "Aujourd'hui" ? "active" : ""
        }`}
        onClick={() => onFilterChange("Aujourd'hui")}
      >
        Aujourd'hui
      </button>

      <button
        className={`filter-button ${
          selectedFilter === "Demain" ? "active" : ""
        }`}
        onClick={() => onFilterChange("Demain")}
      >
        Demain
      </button>

      <div className="filter-separator"></div>

      <button
        className={`filter-button ${selectedFilter === "P1" ? "active" : ""}`}
        onClick={() => onFilterChange("P1")}
      >
        P1
      </button>

      <button
        className={`filter-button ${selectedFilter === "P2" ? "active" : ""}`}
        onClick={() => onFilterChange("P2")}
      >
        P2
      </button>

      <button
        className={`filter-button ${selectedFilter === "P3" ? "active" : ""}`}
        onClick={() => onFilterChange("P3")}
      >
        P3
      </button>
    </div>
  );
};

export default TasksFilter;
