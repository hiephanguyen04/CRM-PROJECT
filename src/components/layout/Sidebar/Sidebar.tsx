import {
  Icon1,
  Icon10,
  Icon11,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  LogoIcon,
} from "@/assets/icons";
import { LogoutIcon } from "@/assets/icons/toggleIcon";
import { useAuth } from "@/contexts/AuthContext";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  return (
    <aside className={`sidebar`}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/"} className={"nav-link logo"}>
              <LogoIcon />
            </NavLink>
          </li>
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <item.icon />
              </NavLink>
            </li>
          ))}
        </ul>
        <button onClick={logout} className="toggle-btn">
          <LogoutIcon />
        </button>
      </nav>
    </aside>
  );
};

const navItems = [
  { path: "/contacts", label: "", icon: Icon1 },
  { path: "/opportunities", label: "", icon: Icon2 },
  { path: "/tasks", label: "", icon: Icon3 },
  { path: "/reports", label: "", icon: Icon4 },
  { path: "/settings", label: "", icon: Icon5 },
  { path: "/settings1", label: "", icon: Icon6 },
  { path: "/settings2", label: "", icon: Icon7 },
  { path: "/settings3", label: "", icon: Icon8 },
  { path: "/settings4", label: "", icon: Icon9 },
  { path: "/", label: "", icon: Icon11 },
  { path: "/settings5", label: "", icon: Icon10 },
];

export default Sidebar;
