// src/components/layout/Layout/Layout.tsx
import { contactsData } from "@/config/mockData";
import { useAuth } from "@/contexts/AuthContext";
import TabsNavigation from "@/pages/Contacts/components/TabsNavigation";
import { ContactsState } from "@/types/contacts.types";
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import "./Layout.css";
import Sidebar from "./Sidebar/Sidebar";

/**
 * Layout principal de l'application
 */
const Layout: React.FC = () => {
  const { user, logout } = useAuth();
  const [state, setState] = useState<ContactsState>({
    selectedContacts: [],
    activeTab: "contacts",
    searchTerm: "",
    filterOptions: {
      primary: "",
      owner: "",
    },
    showListsModal: false,
    showTagsModal: false,
    showAddListModal: false,
    showEditListModal: false,
    showAddTagModal: false,
    showEditTagModal: false,
    showExportModal: false,
    currentPage: 1,
    itemsPerPage: 25,
    totalItems: contactsData.length,
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Déterminer l'élément actif du menu
  const getActiveMenuItem = (): string => {
    const path = location.pathname;

    if (path.startsWith("/contacts")) return "contacts";
    if (path.startsWith("/tasks")) return "tasks";
    if (path.startsWith("/opportunities")) return "opportunities";
    if (path.startsWith("/dashboard")) return "dashboard";
    if (path.startsWith("/calendar")) return "calendar";
    if (path.startsWith("/documents")) return "documents";
    if (path.startsWith("/analytics")) return "analytics";
    if (path.startsWith("/settings")) return "settings";

    return "";
  };

  // Gérer le clic sur un élément du menu
  const handleMenuItemClick = (item: string) => {
    switch (item) {
      case "contacts":
        navigate("/contacts");
        break;
      case "tasks":
        navigate("/tasks");
        break;
      case "opportunities":
        navigate("/opportunities");
        break;
      case "dashboard":
        navigate("/dashboard");
        break;
      case "calendar":
        navigate("/calendar");
        break;
      case "documents":
        navigate("/documents");
        break;
      case "analytics":
        navigate("/analytics");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "logout":
        logout();
        navigate("/login");
        break;
      default:
        break;
    }
  };

  const handleTabChange = (tab: TabType) => {
    setState({ ...state, activeTab: tab });
  };
  return (
    <div className="app-container">
      <Sidebar
        activeItem={getActiveMenuItem()}
        onItemClick={handleMenuItemClick}
      />

      <div className="content-wrapper">
        <Header username={user?.name || ""} role={user?.role || ""} />
        <TabsNavigation
          activeTab={state.activeTab}
          onTabChange={handleTabChange}
        />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
