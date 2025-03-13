// src/pages/Contacts/components/TabsNavigation.tsx
import React from "react";
import { TabType } from "../../../types/contacts.types";

interface TabsNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="contacts-tabs">
      <button
        className={`tab-button ${activeTab === "contacts" ? "active" : ""}`}
        onClick={() => onTabChange("contacts")}
      >
        <svg className="tab-icon" width="16" height="16" viewBox="0 0 24 24">
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            fill="currentColor"
          />
        </svg>
        Contacts
      </button>

      <button
        className={`tab-button ${activeTab === "lists" ? "active" : ""}`}
        onClick={() => onTabChange("lists")}
      >
        <svg className="tab-icon" width="16" height="16" viewBox="0 0 24 24">
          <path
            d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
            fill="currentColor"
          />
        </svg>
        Listes
      </button>

      <button
        className={`tab-button ${activeTab === "tags" ? "active" : ""}`}
        onClick={() => onTabChange("tags")}
      >
        <svg className="tab-icon" width="16" height="16" viewBox="0 0 24 24">
          <path
            d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"
            fill="currentColor"
          />
        </svg>
        Étiquettes
      </button>

      <button
        className={`tab-button ${
          activeTab === "opportunities" ? "active" : ""
        }`}
        onClick={() => onTabChange("opportunities")}
      >
        <svg className="tab-icon" width="16" height="16" viewBox="0 0 24 24">
          <path
            d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2h9zm-9-2h10V8H12v8z"
            fill="currentColor"
          />
        </svg>
        Opportunités
      </button>

      <button
        className={`tab-button ${activeTab === "tasks" ? "active" : ""}`}
        onClick={() => onTabChange("tasks")}
      >
        <svg className="tab-icon" width="16" height="16" viewBox="0 0 24 24">
          <path
            d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
            fill="currentColor"
          />
        </svg>
        Tâches
      </button>
    </div>
  );
};

export default TabsNavigation;
