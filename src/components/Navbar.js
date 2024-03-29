import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './useFetch';

const NavBar = () => {
  const [name, setName] = useState('');
  const baseUrl = "https://www.themealdb.com/api/json/v1/1";
  const { data: location } = useFetch(`${baseUrl}/list.php?a=list`);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/meal-display/${name}`);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://th.bing.com/th/id/OIP.hFB8zNpKSAWXnBrpHZOsUAHaHn?w=173&h=180&c=7&r=0&o=5&pid=1.7"
            alt="logo-img"
            className='logo-img'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Location-Inspired-Menu" id="collapsible-nav-dropdown">
              {location && location.meals.map(area => (
                <NavDropdown.Item key={area.strArea} as={Link} to={`/location/${area.strArea}`}>{area.strArea}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search by meal name"
              className="me-2"
              aria-label="Search"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;