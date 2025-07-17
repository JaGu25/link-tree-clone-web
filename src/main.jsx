import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./normalize.css";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
