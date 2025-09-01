import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const Template = () => {
    return (
    <div>
        <AdminNavbar />
        <div style={{ padding: "20px" }}>
        <Outlet />
        </div>
    </div>
    );
};

export default Template;
