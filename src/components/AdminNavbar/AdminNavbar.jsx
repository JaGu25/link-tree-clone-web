import React from "react";
import styles from "./AdminNavbar.module.css";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>LinktreePro Admin</div>
        
        {location.pathname === "/config" && (
          <NavLink 
            to="/dashboard" 
            className={styles.logoLink}
          >
            Dashboard
          </NavLink>
        )}

        {location.pathname === "/dashboard" && (
          <NavLink 
            to="/config" 
            className={styles.logoLink}
          >
            Configuración
          </NavLink>
        )}
      </div>

      <div className={styles.rightSection}>
        <FaUserCircle className={styles.icon} />
        <button className={styles.logout}>Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
