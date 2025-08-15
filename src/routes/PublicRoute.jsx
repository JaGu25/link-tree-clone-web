import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PublicRoute({ redirectTo = "/config" }) {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  if (isAuthenticated) {
    const to = location.state?.from?.pathname || redirectTo;
    return <Navigate to={to} replace />;
  }
  return <Outlet />;
}
