import React, { useContext } from "react";
import styles from "./AdminNavbar.module.css";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const AdminNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();         
    navigate("/login");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>LinktreePro Admin</div>

        {location.pathname === "/config" && (
          <NavLink to="/dashboard" className={styles.logoLink}>
            Dashboard
          </NavLink>
        )}

        {location.pathname === "/dashboard" && (
          <NavLink to="/config" className={styles.logoLink}>
            Configuración
          </NavLink>
        )}
      </div>

      <div className={styles.rightSection}>
        <FaUserCircle className={styles.icon} />
        <button className={styles.logout} onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
