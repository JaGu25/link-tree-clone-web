import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./normalize.css";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/variables.css";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { ColorProvider } from "./context/ColorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
            <ColorProvider>
            <App />
            </ColorProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
