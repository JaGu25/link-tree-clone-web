import React, { useState } from "react";
import styles from "../Login/Login.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../services/auth.service";
import SweetAlert2 from 'react-sweetalert2';
import { Link } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [swalProps, setSwalProps] = useState({});

    const handleRegister = async (e) => {
    e.preventDefault();

    const formData = {
        name,
        email,
        password,
    };

    try {
        await registerService(formData);

        setSwalProps({
            show: true,
            title: '¡Registro exitoso!',
            text: 'Ahora puedes iniciar sesión',
            icon: 'success',
        });

        setTimeout(() => {
            navigate("/login");
        }, 2000);
    } catch (error) {
        setSwalProps({
            show: true,
            title: 'Error',
            text: error.message || 'Ocurrió un error al registrar',
            icon: 'error',
        });
    }
};

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h2 className={styles.loginTitle}>LinktreePro</h2>
                <p className={styles.loginSubtitle}>Crea tu cuenta gratuita</p>

                <form className={styles.loginForm} onSubmit={handleRegister}>
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        required
                    />

                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tucorreo@example.com"
                        required
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Crea una contraseña'
                        required
                    />

                    {error && <p className={styles.error}>{error}</p>}

                    <Button text="Registrarse" type="submit" variant="primary" />

                    <p className={styles.registerText}>
                        ¿Ya tienes una cuenta?  <Link to="/login">Inicia sesión</Link>
                    </p>
                </form>
            </div>
            <SweetAlert2 {...swalProps} />
        </div>
    );
};

export default Register;
