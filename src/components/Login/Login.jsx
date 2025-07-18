import React from 'react';
import styles from './Login.module.css';
import Button from "../Button/Button";

const Login = () => {
    return (
    <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
        <h2 className={styles.loginTitle}>LinktreePro</h2>
        <p className={styles.loginSubtitle}>Inicia sesión en tu cuenta</p>
        <form className={styles.loginForm}>
            <label htmlFor="email">Correo electrónico</label>
            <input
            type="email"
            id="email"
            placeholder="tucorreo@example.com"
            required
            />
            <label htmlFor="password">Contraseña</label>
            <input
            type="password"
            id="password"
            placeholder='Crea una contraseña'
            required
            />
            <Button text="Iniciar sesión" type="submit" variant="primary" />
            <p className={styles.registerText}>
            ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
            </p>
        </form>
        </div>
    </div>
    );
};

export default Login;
