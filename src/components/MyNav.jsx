import React from "react";
import "../assets/css/style.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo/Symbol.png";
import "../../src/Footer.css"

const MyNav = () => {
  return (
    <nav className="" style={{background:"#ade2ec"}}>
      <Navbar
  expand="lg"
  className="sticky navbar"
  style={{ position: "fixed", zIndex: "1", top: "0",backgroundColor: "#dedcd7"}}
>
        <Container>
          <Navbar.Brand className="logo ">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "60px",
                  marginRight: "10px",
                  marginBottom: "7px",
                }}
              />
              <span className="text-dark">MediVault</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="position-relative">
            <Nav className="me-5 position-absolute end-0">
              <ul id="nav" className="me-5 navbar-nav ml-auto  ">
                <li className="nav-item active me-5">
                  <NavLink className="page-scroll nvv" to="/">
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item me-5">
                  <NavLink className="page-scroll nvv" to="/about">
                    <span>About</span>
                  </NavLink>
                </li>
                
                <li className="nav-item me-5">
                  <NavLink className="page-scroll nvv" to="/dashboard">
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className="nav-item me-5">
                  <NavLink className="page-scroll nvv" to="/team">
                    <span>Our Team</span>
                  </NavLink>
                </li>
                <li className="nav-item me-5">
                  <NavLink className="page-scroll nvv" to="/contact">
                    <span>Contact Us</span>
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mt-5 py-2"></div>
    </nav>
  );
};

export default MyNav;
