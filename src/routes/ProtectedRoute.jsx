import { useEffect, useState } from "react";

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import userService from "../services/userService";

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const res = await userService.checkAccessToken();
      if (res.data.status === 200) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
      console.log(error);
    }
  }

  if (isAuthenticated === null) {
    return (
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <lord-icon
          src="https://cdn.lordicon.com/afixdwmd.json"
          trigger="loop"
          state="loop-cycle"
          style={{ width: "150px", height: "150px" }}
        ></lord-icon>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isAuthenticated === false && !showLoginPrompt) {
    // Display a prompt instead of immediate redirect
    return (
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center flex-column">
        <h2>You need to log in to access this page.</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
