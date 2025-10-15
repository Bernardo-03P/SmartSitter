import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import Logo from '../../assets/Img/Logo.png';
import { Link } from "react-router-dom";
import { X, Menu } from 'lucide-react'; 

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false); 

  return (
    <Navbar
      expand="lg"
      className="navbar-home"
      variant="dark"
      expanded={expanded}
      fixed="top"
    >
      <Container fluid className="ps-5 d-flex align-items-center justify-content-between">
        

        <Navbar.Brand as={Link} to="/home" className="logo ms-3">
          <img src={Logo} alt="SmartSitter" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="custom-toggle"
          onClick={() => setExpanded(expanded ? false : true)}
        >
          {expanded ? <X size={28} color="#EEF4F5" /> : <Menu size={28} color="#EEF4F5" />}
        </Navbar.Toggle>


        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto text-center nav-center">
            <Nav.Link as={Link} to="/app" className="nav-link-custom" onClick={() => setExpanded(false)}>App</Nav.Link>
            <Nav.Link as={Link} to="/aparelho" className="nav-link-custom" onClick={() => setExpanded(false)}>Aparelho</Nav.Link>
            <Nav.Link as={Link} to="/suporte" className="nav-link-custom" onClick={() => setExpanded(false)}>Suporte</Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link-custom d-lg-none" onClick={() => setExpanded(false)}>Entrar</Nav.Link>
          </Nav>

          <Nav className="pe-5 d-none d-lg-flex">
            <Nav.Link as={Link} to="/login" className="nav-link-entrar me-3">Entrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
