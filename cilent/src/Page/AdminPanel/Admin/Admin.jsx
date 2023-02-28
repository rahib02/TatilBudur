import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar/AdminNavbar";
import Admindata from "../../../ContextApi/Admindata";
function Admin() {
  return (
      <Admindata>
      <div style={{ display: "flex" }}>
      <AdminNavbar />
      <Outlet />
    </div>
    </Admindata>
  );
}

export default Admin;
