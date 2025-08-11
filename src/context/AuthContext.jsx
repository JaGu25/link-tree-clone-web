import React, { createContext, useState, useEffect, useRef } from "react";

export const AuthContext = createContext();

const API_URL = "http://localhost:3001/api";

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!refreshToken);
    const isRefreshingRef = useRef(false);

    const saveTokens = (newAccessToken, newRefreshToken) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    setIsAuthenticated(true);
    };

    const clearAuth = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("refreshToken");
    setUser(null);
    setIsAuthenticated(false);
    };

    const refreshAccessToken = async () => {
    if (isRefreshingRef.current) return false;
    if (!refreshToken) {
        clearAuth();
        return false;
    }

    isRefreshingRef.current = true;

    try {
        const res = await fetch(`${API_URL}/auth/refresh-token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
        },
        });

        if (!res.ok) {
        clearAuth();
        isRefreshingRef.current = false;
        return false;
        }

        const data = await res.json();

        setAccessToken(data.accessToken);
        setUser(data.user);
        setIsAuthenticated(true);
        isRefreshingRef.current = false;
        return true;
    } catch {
        clearAuth();
        isRefreshingRef.current = false;
        return false;
    }
    };

    useEffect(() => {
    let mounted = true;
    if (mounted && !accessToken) {
        refreshAccessToken();
    }
    return () => {
        mounted = false;
    };
    }, []);

    const login = (tokens, userData) => {
    saveTokens(tokens.accessToken, tokens.refreshToken);
    setUser(userData);
    };

    const logout = () => {
    clearAuth();
    };

    return (
    <AuthContext.Provider
        value={{
        accessToken,
        refreshToken,
        user,
        isAuthenticated,
        login,
        logout,
        refreshAccessToken,
        }}
    >
        {children}
    </AuthContext.Provider>
    );
};
