import React, { useContext } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { FormDetailsContext } from "../../Utils/context";
import "./UserForm.css";

function LastPageForm({ handlePagePrev }) {
  const [userForm, setUserForm] = useContext(FormDetailsContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    if(!userForm.nameOfIndustry || !userForm.nameOfIndividual || !userForm.email || !userForm.phoneNumber){
        alert("Enter all the details first!!!");
    }else{
      console.log(userForm.firstName, userForm.nameOfIndustry);
      alert(
        `${userForm.nameOfIndividual} submitted details for ${userForm.nameOfIndustry}`
      );
      setUserForm({
        industryName: "",
        firstName: "",
        lastName: "",
        nameOfIndustry: "",
        nameOfIndividual: "",
        email: "",
        phoneNumber: "",
      });
      handlePagePrev(1);
    }
  };
  return (
    <Container className="my-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            name="nameOfIndustry"
            type="text"
            value={userForm.nameOfIndustry}
            className="input-page2"
            placeholder="Name of the Industry"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="nameOfIndividual"
            value={userForm.nameOfIndividual}
            type="text"
            className="input-page2"
            placeholder="Name of the Individual"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="email"
            value={userForm.email}
            type="text"
            className="input-page2"
            placeholder="Email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="phoneNumber"
            value={userForm.phoneNumber}
            type="text"
            className="input-page2"
            placeholder="Phone Number"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Container className="form-button-container-left">
        <Button
          style={{ width: "5rem" }}
          variant="outline-info"
          onClick={() => handlePagePrev(1)}
        >
          Previous
        </Button>
      </Container>
      <Container className="form-button-container-right">
        <Button style={{ width: "5rem" }} variant="dark" onClick={handleSubmit}>
          Submit
        </Button>
      </Container>
    </Container>
  );
}

export default LastPageForm;
