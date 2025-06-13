
import { useState } from "react";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";

export function Navbar() {
  const [expandedMenus, setExpandedMenus] = useState<{ [key: number]: boolean }>({});

  const toggleMenu = (pageIndex: number) => {
    setExpandedMenus(prev => ({
      ...prev,
      [pageIndex]: !prev[pageIndex]
    }));
  };

  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <li key={`subpage-${pageIndex}-${subpageIndex}`} className="sidebar-submenu-item">
              <Link to={subpage.path} className="sidebar-link sidebar-sublink">
                {subpage.name}
              </Link>
            </li>
          );
        }
        return null;
      });

      return (
        <li key={`page-${pageIndex}`} className="sidebar-menu-item">
          <button
            className="sidebar-toggle-btn"
            onClick={() => toggleMenu(pageIndex)}
            aria-expanded={expandedMenus[pageIndex] || false}
          >
            <span>{item.name}</span>
            <span className={`sidebar-arrow ${expandedMenus[pageIndex] ? 'expanded' : ''}`}>
              ▼
            </span>
          </button>
          <ul className={`sidebar-submenu ${expandedMenus[pageIndex] ? 'expanded' : ''}`}>
            {folderItems}
          </ul>
        </li>
      );
    } else if ("path" in item && item.path) {
      return (
        <li key={`page-${pageIndex}`} className="sidebar-menu-item">
          <Link to={item.path} className="sidebar-link">
            {item.name}
          </Link>
        </li>
      );
    }
    return null;
  });

  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        {import.meta.env.VITE_TEAM_NAME}
      </div>
      <ul className="sidebar-menu">
        {pages}
      </ul>
    </nav>
  );
}
