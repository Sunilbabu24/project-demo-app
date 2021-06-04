import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Ems</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/create-employee">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/create-employee">
              <Nav.Link href="#link">CreateEmployee</Nav.Link>
            </Link>

            <Link to="/list-employee">
              <Nav.Link href="#link">EmployeeList</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
