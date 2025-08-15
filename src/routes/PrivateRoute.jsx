import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({
  fallback = <div>Cargando...</div>,
  redirectTo = "/login",
}) {
  const { isAuthenticated, refreshAccessToken } = useContext(AuthContext);
  const [checking, setChecking] = useState(true);
  const triedRef = useRef(false);
  const location = useLocation();

  useEffect(() => {
    let alive = true;
    if (isAuthenticated) {
      setChecking(false);
      return;
    }
    if (triedRef.current) {
      setChecking(false);
      return;
    }
    triedRef.current = true;
    (async () => {
      await refreshAccessToken();
      if (alive) setChecking(false);
    })();
    return () => {
      alive = false;
    };
  }, [isAuthenticated, refreshAccessToken]);

  if (checking) return fallback;
  if (!isAuthenticated)
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  return <Outlet />;
}
