// src/components/layout/Header/Header.tsx
import {
  NotificationIcon,
  QuestionIcon,
  SearchIcon,
  SettingIcon,
} from "@/assets/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import "./Header.scss";

// import "./Header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Determine active tab based on current path
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher dans Metaforma"
          />
        </div>
        <button className="add-button">
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="header-right">
        <button className="notifications-button">
          <NotificationIcon />
        </button>
        <button className="notifications-button">
          <QuestionIcon />
        </button>

        <button className="settings-button">
          <SettingIcon />
        </button>

        <div className="user-profile">
          {currentUser && (
            <>
              <img
                src={
                  currentUser.avatar ||
                  "https://i.pinimg.com/736x/ec/ea/a5/eceaa5120cc80fbdf75d07829387d8a4.jpg"
                }
                alt={currentUser.fullName}
                className="avatar"
              />
              <div className="user-info">
                <div className="user-name">{currentUser.fullName}</div>
                <div className="user-role">{currentUser.position}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
