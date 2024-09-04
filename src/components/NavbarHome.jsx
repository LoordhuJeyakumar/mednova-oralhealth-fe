import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import medNovaLogo from "../assets/images/medNOVA_Logo.png";
import bellIcon from "../assets/images/bell_icon.svg";
import userProfilePicture from "../assets/images/user.jpeg";
import CustomButton from "./CustomButton";
import { useAppContext } from "../context/AppProvider";

function NavbarHome() {
  const navigate = useNavigate();
  const { user } = useAppContext();

  console.log(user);

  return (
    <Navbar expand="lg" className="navbar-home border-bottom border-2">
      <Container fluid>
        <Link className="navbar-brand" to={"/"}>
          <img
            src={medNovaLogo}
            alt="MedNova Logo"
            width="63"
            height="63"
            className="me-2"
          />
          <span className="brand-name">medNOVA DIAGNOSTICS Inc.</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end gap-5 me-5"
        >
          <div className="search-box">
            <InputGroup className="search-input">
              <InputGroup.Text>
                <i className="fa fa-search opacity-50" aria-hidden="true"></i>
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </InputGroup>
          </div>

          <Nav className="align-items-center gap-2">
            <Nav.Item className="position-relative">
              <img src={bellIcon} alt="Notifications" />
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle bell-notification"></span>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="d-flex align-items-center">
                <img
                  src={userProfilePicture}
                  alt="User"
                  className="user avatar me-2"
                />
                <span className="fw-500 user-name">Ashish Raj</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* Logount icon */}
              <button
                className="btn"
                style={{ color: "#5f6368" }}
                type="button"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Logout &nbsp;
                <i className="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
