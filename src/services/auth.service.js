import { API_URL } from "../api/config.js";

export const loginService = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al iniciar sesión");
    }

    const data = await response.json();

    return {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    };
};
