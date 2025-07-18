import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import LandingPage from "../pages/landing/landingpage";
import Login from "../components/Login/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
