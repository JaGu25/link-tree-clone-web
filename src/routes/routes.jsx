import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import LandingPage from "../pages/landing/landingpage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
