import React, { useContext } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { FormDetailsContext } from "../../Utils/context";
import "./UserForm.css";

function FirstPageForm({ handlePageNext }) {
  const [userForm, setUserForm]  = useContext(FormDetailsContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };
  return (
    <Container className="my-4">
      <h5 className="form-header">Lorem ipsum is simply dummy</h5>
      <p className="form-subtitle">
        text of the printing and typesetting industry.
      </p>
      <Form className="form-bg">
        <Form.Group className="mb-3">
          <Form.Select className="input-page1" name="industryName" value={userForm.industryName} onChange={handleChange}>
            <option>Industry Name</option>
            <option value={1}>option1</option>
            <option value={2}>option2</option>
            <option value={3}>option3</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control
                name="firstName"
                value={userForm.firstName}
                type="text"
                className="input-page1"
                placeholder="First name"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                name="lastName"
                value={userForm.lastName}
                type="text"
                className="input-page1"
                placeholder="Last name"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Container className="form-button-container-right">
        <Button
          style={{ width: "5rem" }}
          variant="outline-info"
          onClick={() => handlePageNext(2)}
        >
          Next
        </Button>
      </Container>
    </Container>
  );
}

export default FirstPageForm;
