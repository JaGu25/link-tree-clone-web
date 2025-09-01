import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import LandingPage from "../pages/landing/landingpage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import LinktreeConfig from "../components/LinktreeConfig/LinktreeConfig";
import PublicProfile from "../components/PublicProfile/PublicProfile";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Dashboard from "../components/Dashboard/dashboard";
import Template from "../components/Template/template";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      
      <Route element={<PrivateRoute />}>
        <Route element={<Template />}>
          <Route path="/config" element={<LinktreeConfig />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      <Route path="/public/:userId" element={<PublicProfile />} />
    </Routes>
  );
}

export default AppRoutes;
