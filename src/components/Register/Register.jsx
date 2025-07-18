import React from 'react';
import styles from "../Login/Login.module.css";
import Button from "../Button/Button";

const Register = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h2 className={styles.loginTitle}>LinktreePro</h2>
                <p className={styles.loginSubtitle}>Crea tu cuenta gratuita</p>
                <form className={styles.loginForm}>
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Tu nombre"
                        required
                    />
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
                    <Button text="Registrarse" type="submit" variant="primary" />
                    <p className={styles.registerText}>
                        ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
