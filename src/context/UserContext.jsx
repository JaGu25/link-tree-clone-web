import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
const API_URL = "http://localhost:3001/api";

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const getValidToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) throw new Error("No hay refresh token");

    const res = await fetch(`${API_URL}/auth/refresh-token`, {
        method: "POST",
        headers: { Authorization: `Bearer ${refreshToken}` },
    });

    if (!res.ok) throw new Error("No se pudo refrescar el token");
    const data = await res.json();
    return data.accessToken;
    };

    return (
    <UserContext.Provider
        value={{ loading, setLoading, message, setMessage, getValidToken }}
    >
        {children}
    </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
