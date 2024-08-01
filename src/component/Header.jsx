import React ,{useState}from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const Header = ({setSearchTerm}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };
  return (
    <Navbar variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/">MovieDb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="/">Popular</Nav.Link>
            <Nav.Link href="/top-rated">Top-rated</Nav.Link>
            <Nav.Link href="/upcoming">Upcoming</Nav.Link>
          </Nav>
          <Form inline className="search-form ">
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2 mx-2"
              onChange={handleInputChange}
            />
            <Button variant="outline-light" onClick={handleSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
