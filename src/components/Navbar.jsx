import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = ({ artist }) => {
  return (
    <BootstrapNavbar
      bg="light"
      expand="lg"
      className="bg-body-tertiary"
      collapseOnSelect
    >
      <Container>
        <BootstrapNavbar.Brand href="/">
          <h1 className="mb-0 example">Finnja Willner</h1>
          <p className="mb-0 example" style={{ color: "gray" }}>
            {artist}
          </p>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbarNavAltMarkup" />
        <BootstrapNavbar.Collapse id="navbarNavAltMarkup">
          <Nav className="ms-auto example">
            <Nav.Item>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
