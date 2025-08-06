import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Button from "../Button/Button";
import { loginService } from "../../services/auth.service";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
        const { accessToken, refreshToken } = await loginService(email, password);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/config");
    } catch (err) {
        setError(err.message);
    }
    };

    return (
    <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
        <h2 className={styles.loginTitle}>LinktreePro</h2>
        <p className={styles.loginSubtitle}>Inicia sesión en tu cuenta</p>

        <form className={styles.loginForm} onSubmit={handleLogin}>
            <label htmlFor="email">Correo electrónico</label>
            <input
            type="email"
            id="email"
            placeholder="tucorreo@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Contraseña</label>
            <input
            type="password"
            id="password"
            placeholder="Tu contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className={styles.error}>{error}</p>}

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
