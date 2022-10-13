import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footer p-5 mt-5">
      <Container className="d-flex flex-wrap justify-content-between align-items-center">
      <img src="sap-footer-logo.svg" alt="Footer" className="footer-img"></img>
      <p className="py-4">© 2022 Minions Ventures Pvt Ltd</p>
      </Container>
    </Container>
  );
}

export default Footer;
