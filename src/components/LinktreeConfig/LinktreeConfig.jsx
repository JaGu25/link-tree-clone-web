import React from "react";
import styles from "./LinktreeConfig.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Button from "../../components/Button/Button";

const LinktreeConfig = () => {
  return (
    <>
      <AdminNavbar />

      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h2 className={styles.pageTitle}>Configura tu Linktree</h2>
        </div>

        <div className={styles.container}>
          <form className={styles.form}>
            <label>Nombre de usuario</label>
            <input type="text" placeholder="@tuusuario" />

            <label>Biografía</label>
            <textarea placeholder="Cuéntanos algo sobre ti" />

            <label>Avatar (URL de imagen)</label>
            <input type="url" placeholder="https://miimagen.com/avatar.jpg" />

            <label>Enlaces populares</label>
            <input type="url" placeholder="https://instagram.com/usuario" />
            <input type="url" placeholder="https://youtube.com/usuario" />
            <input type="url" placeholder="https://tiktok.com/@usuario" />
            <input type="url" placeholder="https://linkedin.com/in/usuario" />

            <label>Agregar otro enlace</label>
            <input type="url" placeholder="https://miweb.com" />

            <label>Color principal</label>
            <input type="color" defaultValue="#5f5fff" />

            <div className={styles.actionsRow}>
              <div className={styles.checkbox}>
                <input type="checkbox" id="public" />
                <label htmlFor="public">Hacer mi perfil público</label>
              </div>

              <div className={styles.buttonContainer}>
                <Button text="Guardar cambios" type="submit" />
              </div>
            </div>
          </form>
        </div>

        <div className={styles.publicLink}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Ver mi Linktree público
          </a>
        </div>
      </div>
    </>
  );
};

export default LinktreeConfig;
