import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, refreshAccessToken } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    (async () => {
        if (!isAuthenticated) {
        const valid = await refreshAccessToken();
        setLoading(false);
        if (!valid) return;
        } else {
        setLoading(false);
        }
    })();
    }, [isAuthenticated, refreshAccessToken]);

    if (loading) return <div>Cargando...</div>;

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return children;
};

export default PrivateRoute;
