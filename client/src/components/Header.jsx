import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse> </Navbar.Collapse>
          <Nav>
            <Nav.Link>
              <FaSignInAlt />
            </Nav.Link>
            <Nav.Link>
              <FaSignOutAlt />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
