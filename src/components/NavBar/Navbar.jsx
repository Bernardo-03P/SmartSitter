import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { X, Menu } from 'lucide-react'; 
import { useAuth } from '../../context/AuthContext'; // 1. Importe o hook useAuth
import Logo from '../../assets/Img/Logo.png';
import './NavBar.css';

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false); 
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // 2. Use o contexto para obter o estado de login e a função de logout

  const handleLogout = () => {
    logout(); // Limpa o token e o estado
    setExpanded(false); // Fecha o menu hamburger se estiver aberto
    navigate('/login'); // Redireciona o usuário para a tela de login
  };

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
          onClick={() => setExpanded(expanded ? false : "true")} // Corrigido para "true" string
        >
          {expanded ? <X size={28} color="#EEF4F5" /> : <Menu size={28} color="#EEF4F5" />}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          {/* Links Centrais */}
          <Nav className="mx-auto text-center nav-center">
            <Nav.Link as={Link} to="/app" className="nav-link-custom" onClick={() => setExpanded(false)}>App</Nav.Link>
            <Nav.Link as={Link} to="/produto" className="nav-link-custom" onClick={() => setExpanded(false)}>Aparelho</Nav.Link>
            
            {/* 3. Renderização Condicional: Só mostra Suporte se estiver logado */}
            {isAuthenticated && (
              <Nav.Link as={Link} to="/suporte" className="nav-link-custom" onClick={() => setExpanded(false)}>Suporte</Nav.Link>
            )}
            
            {/* Link de Login/Logout para o menu mobile */}
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout} className="nav-link-custom d-lg-none">Sair</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-link-custom d-lg-none" onClick={() => setExpanded(false)}>Entrar</Nav.Link>
            )}
          </Nav>

          {/* Links da Direita (Desktop) */}
          <Nav className="pe-5 d-none d-lg-flex">
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout} className="nav-link-entrar me-3">Sair</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-link-entrar me-3">Entrar</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;