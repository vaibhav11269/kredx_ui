import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="md" className="py-3" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home" className="ms-4">
          <img
            src="sticky-logo.svg"
            width="75"
            height="30"
            className="d-inline-block align-top"
            alt="KredX logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#menu1" className="menu-link">
              Menu1
            </Nav.Link>
            <Nav.Link href="#menu2" className="menu-link active">
              Menu2
            </Nav.Link>
            <Nav.Link href="#menu3" className="menu-link">
              Menu3
            </Nav.Link>
            <Nav.Link href="#menu4" className="menu-link">
              Menu4
            </Nav.Link>
            <Nav.Link href="#menu5" className="menu-link">
              Menu5
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
