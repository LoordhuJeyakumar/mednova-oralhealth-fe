// Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import medNovaLogo from "../assets/images/medNOVA_Logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light m-3 navbar-root rounded-pill"
      style={{ backgroundColor: "#0D3545" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={medNovaLogo}
            alt="MedNova Logo"
            width="63"
            height="63"
            className="me-2"
          />
          <span className="brand-name">medNOVA DIAGNOSTICS Inc.</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex justify-content-evenly gap-3">
            <li className="nav-item">
              <NavLink className="nav-link px-4 btn signup" to="/">
                Signup
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link px-4 btn login" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
