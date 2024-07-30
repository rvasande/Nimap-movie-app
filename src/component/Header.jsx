import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/">MyLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="#popular">Popular</Nav.Link>
            <Nav.Link href="#top-rated">Top-rated</Nav.Link>
            <Nav.Link href="#upcoming">Upcoming</Nav.Link>
          </Nav>
          <Form inline className="search-form">
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
