import { API_URL } from "../api/config.js";

export const loginService = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al iniciar sesión");
    }

    const { accessToken, refreshToken, user } = await response.json();
    return { accessToken, refreshToken, user };
};

export const refreshTokenService = async (refreshToken) => {
    const response = await fetch(`${API_URL}/auth/refresh-token`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
    },
    });

    if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al refrescar el token");
    }

    const { accessToken, user } = await response.json();
    return { accessToken, user };
};



export const registerService = async ({ name, email, password }) => {
    const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al registrarse");
    }

    return await response.json();
};
