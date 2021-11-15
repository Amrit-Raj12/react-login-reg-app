import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Router>
                {/* <Nav.Link href="/info">Company Info</Nav.Link> */}
              </Router>
            </Nav>
            <Nav>
              <Router>
                {/* <Link to="/info">Company Info</Link> */}
                <Nav.Link href="/info">Company Info</Nav.Link>
                <Nav.Link href="/">Register</Nav.Link>
              </Router>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
