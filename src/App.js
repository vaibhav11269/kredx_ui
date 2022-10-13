import Container from "react-bootstrap/Container";
import FormContext from "./Utils/context";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Advantages from "./Components/Advantages/Advantages";
import UserForm from "./Components/UserForm/UserForm";
import "./App.css";
import DataInfo from "./Components/Info/DataInfo";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid className="main-image-section">
        <img src="1.png" alt="main-image" />
      </Container>
      <Container className="form-section">
        <FormContext>
          <UserForm />
        </FormContext>
      </Container>
      <Container className="advantage-section">
        <Advantages />
      </Container>
      <DataInfo />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
