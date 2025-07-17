import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Test from "../pages/test/test";
import LandingPage from "../pages/landing/landingpage"; 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default AppRoutes;
