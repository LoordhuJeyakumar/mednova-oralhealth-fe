import React from "react";
import NavbarHome from "../components/NavbarHome";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <NavbarHome />
      <Outlet />
    </>
  );
}

export default DashboardLayout;
