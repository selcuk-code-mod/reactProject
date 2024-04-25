import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Herosection from "../Hero/Herosection";
import CardExample from "../CardProd/CardExample";
import Footer from "../Footer/footer";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            Start Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-white"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="text-whiteborder-white"
          >
            <Nav className="ms-auto">
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-secondary" href="#link">
                About
              </Nav.Link>
              <Nav.Link className="text-secondary" href="#link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Herosection />
      <br />
      <br />
      <CardExample />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
