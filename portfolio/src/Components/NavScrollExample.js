import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/NavBarStyle.css'



function BasicExample() {
  return (
    <Navbar  bg="dark" data-bs-theme="dark" expand="lg">
    <Container>
      <Navbar.Brand  as={Link} to="../" className="leftmost-navbar">Frankie's Port</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className='me-auto'>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="../projects">Projects</Nav.Link>
        <Nav.Link as={Link} to="../resume">Resume</Nav.Link>
        <Nav.Link as={Link} to="../contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="../skills">Skills and Technology</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default BasicExample;