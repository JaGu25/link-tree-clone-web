import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>LinktreePro</div>
      <nav className={styles.nav}>
        <a href="#features">Características</a>
        <a href="#features">Precios</a>
        <a href="#comunidad">Comunidad</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className={styles.actions}>
        <button
          className={styles.login}
          onClick={() => navigate("/login")}
        >
          Iniciar sesión
        </button>
        <Button
          text="Registrarse"
          onClick={() => navigate("/register")}
        />
      </div>
    </header>
  );
};

export default Navbar;
