import { Component } from "react";
import { Container, Stack, Row, Col } from "react-bootstrap";
import "./Contacts.css";

function Contacts() {
  return (
    <>
      <Container>
        <Stack gap={3}>
          <h5 className="display-6 my-5">
            <strong>Contact Us</strong>
          </h5>
          <Container fluid className="d-flex flex-wrap">
            <Row className="row gy-3">
              <Col xs={12} sm={6} md={3}>
                <Stack>
                  <p className="fs-6 text-uppercase mb-1 p-0">India</p>
                  <h6 className="fs-6 h6 fw-bold m-0 p-0 text-muted">1800 419 4919</h6>
                </Stack>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Stack>
                  <p className="fs-6 text-uppercase mb-1 p-0">Outside India</p>
                  <h6 className="fs-6 h6 fw-bold m-0 p-0 text-muted">+91-8061799200</h6>
                </Stack>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Stack>
                  <p className="fs-6 text-uppercase mb-1 p-0">global email</p>
                  <h6 className="fs-6 h6 fw-bold m-0 p-0 text-muted">info@kredx.com</h6>
                </Stack>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Stack>
                  <p className="fs-6 text-uppercase mb-1 p-0">for media enquiries</p>
                  <h6 className="fs-6 h6 fw-bold m-0 p-0 text-muted">px@kredx.com</h6>
                </Stack>
              </Col>

            </Row>
          </Container>
        </Stack>
      </Container>
    </>
  );
}

export default Contacts;
