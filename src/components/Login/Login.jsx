import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Button from "../Button/Button";
import { loginService } from "../../services/auth.service";
import SweetAlert2 from "react-sweetalert2";
import { AuthContext } from "../../context/AuthContext"; 

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [swalProps, setSwalProps] = useState({});

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { accessToken, refreshToken } = await loginService(email, password);
            login({ accessToken, refreshToken });

            setSwalProps({
                show: true,
                icon: "success",
                title: "¡Login exitoso!",
                text: "Bienvenido de nuevo",
                timer: 2000,
                showConfirmButton: false,
            });
        } catch (err) {
            setSwalProps({
                show: true,
                icon: "error",
                title: "Error al iniciar sesión",
                text: err.message || "Credenciales inválidas",
            });
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

                    <Button text="Iniciar sesión" type="submit" variant="primary" />
                    <p className={styles.registerText}>
                        ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
                    </p>
                </form>
            </div>
            <SweetAlert2
                {...swalProps}
                didClose={() => {
                    if (swalProps.icon === "success") {
                        navigate("/config");
                    }
                    setSwalProps({});
                }}
            />
        </div>
    );
};

export default Login;
