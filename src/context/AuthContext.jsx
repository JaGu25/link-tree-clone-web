import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
    const saved = localStorage.getItem("auth");
    return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
    if (auth) localStorage.setItem("auth", JSON.stringify(auth));
    else localStorage.removeItem("auth");
    }, [auth]);

    const login = (data) => setAuth(data);
    const logout = () => setAuth(null);

    return (
    <AuthContext.Provider value={{ auth, login, logout }}>
        {children}
    </AuthContext.Provider>
    );
};
