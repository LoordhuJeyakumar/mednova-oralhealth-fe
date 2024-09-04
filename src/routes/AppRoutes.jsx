import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PublicLayout from "../layout/PublicLayout";
import Login from "../pages/Login";
import VerifyEmailPage from "../pages/VerifyEmailPage";
import RedirectPage from "../pages/RedirectPage";

import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/verify-email/:id/:token"
            element={<VerifyEmailPage />}
          />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
