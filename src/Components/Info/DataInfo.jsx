import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import "./DataInfo.css";

function DataInfo() {
  return (
    <>
      <Container fluid className="info p-4 mb-4">
        <h5 className="text-center pt-4 mt-6 mb-4">
          HELPING BUSINESS OWNERS SINCE 2015
        </h5>
        <Container className="p-4">
          <Row>
            <Col xs={6} sm={4}>
              <Stack gap={2}>
                <h5 className="display-6 fs-3">1 Million</h5>
                <p className="lead fs-6 text-para">Invoices Discounted</p>
              </Stack>
            </Col>
            <Col xs={6} sm={4}>
              <Stack gap={2}>
                <h5 className="display-6 fs-3">$4 Billion</h5>
                <p className="lead fs-6 text-para">Transaction value</p>
              </Stack>
            </Col>
            <Col xs={6} sm={4}>
              <Stack gap={2}>
                <h5 className="display-6 fs-3">2 millions</h5>
                <p className="lead fs-6 text-para">
                  Transactions Proceesed till Date{" "}
                </p>
              </Stack>
            </Col>
            <Col xs={6} sm={4}>
              <Stack gap={2}>
                <h5 className="display-6 fs-3">23,000+</h5>
                <p className="lead fs-6 text-para">Businesses Helped</p>
              </Stack>
            </Col>
            <Col xs={6} sm={4}>
              <Stack gap={2}>
                <h5 className="display-6 fs-3">70,000+</h5>
                <p className="lead fs-6 text-para">New & Returing Investors</p>
              </Stack>
            </Col>
            <Col xs={6} sm={4}>
              <Stack gap={2}>
                <h5 className="display-6 fs-3">225+</h5>
                <p className="lead fs-6 text-para">
                  Corporates on KredX Platform
                </p>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default DataInfo;
