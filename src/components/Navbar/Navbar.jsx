import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button"; 

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>LinktreePro</div>
      <nav className={styles.nav}>
        <a href="#features">Características</a>
        <a href="#precios">Precios</a>
        <a href="#comunidad">Comunidad</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className={styles.actions}>
        <button className={styles.login}>Iniciar sesión</button>
        <Button text="Registrarse"/>
      </div>
    </header>
  );
};

export default Navbar;
