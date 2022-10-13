import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import "./Advantages.css";

function Advantages() {
  return (
    <>
      <h3 className="intro-para">
        Why <span style={{ color: "#0CF2F2" }}>KredX</span> For
      </h3>
      <h3 className="intro-para">Invoice Discounting?</h3>
      <Container className="my-4 p-0">
        <Row>
          <Col xs={6} sm={4}>
            <Stack gap={3}>
              <div>
                <img src="invoice1.svg" alt="Invoice1" />
              </div>
              <div>
                <h5 className="advantage-header">
                  Quick verification and cash flow
                </h5>
                <p className="advantage-para text-muted">
                  Verify your business instantly on the KredX platform and get
                  funds in 24-72 hours*
                </p>
              </div>
            </Stack>
          </Col>
          <Col xs={6} sm={4}>
            <Stack gap={3}>
              <div>
                <img src="invoice2.svg" alt="Invoice2" />
              </div>
              <div>
                <h5 className="advantage-header">Risk-free Assets</h5>
                <p className="advantage-para text-muted">
                  Get cash against your company's unpaid invoices. No need to
                  pledge any assets
                </p>
              </div>
            </Stack>
          </Col>
          <Col xs={6} sm={4}>
            <Stack gap={3}>
              <div>
                <img src="invoice3.svg" alt="Invoice3" />
              </div>
              <div>
                <h5 className="advantage-header">Avoid New Debt</h5>
                <p className="advantage-para text-muted">
                  Grow your business without impacting your balance sheet
                </p>
              </div>
            </Stack>
          </Col>

          <Col xs={6} sm={4}>
            <Stack gap={3}>
              <div>
                <img src="invoice4.svg" alt="Invoice4" />
              </div>
              <div>
                <h5 className="advantage-header">Real-time Updates</h5>
                <p className="advantage-para text-muted">
                  Track your status on the go through KredX self-serve module
                </p>
              </div>
            </Stack>
          </Col>
          <Col xs={6} sm={4}>
            <Stack gap={3}>
              <div>
                <img src="invoice5.svg" alt="Invoice5" />
              </div>
              <div>
                <h5 className="advantage-header">Paperless Process</h5>
                <p className="advantage-para text-muted">
                  Upload your documents and invoices easily on the KredX
                  platform
                </p>
              </div>
            </Stack>
          </Col>
          <Col xs={6} sm={4}>
            <Stack gap={3}>
              <div>
                <img src="invoice6.svg" alt="Invoice6" />
              </div>
              <div>
                <h5 className="advantage-header">End-to-end Management</h5>
                <p className="advantage-para text-muted">
                  Smooth and transparent process from invoice listing to funds
                  disbursal
                </p>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Advantages;
