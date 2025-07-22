import React from "react";
import styles from "./AdminNavbar.module.css";
import { FaUserCircle } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LinktreePro Admin</div>

      <div className={styles.rightSection}>
        <FaUserCircle className={styles.icon} />
        <button className={styles.logout}>Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
