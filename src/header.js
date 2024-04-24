import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const feather = require('feather-icons');
feather.replace();
setTimeout(() =>{
    feather.replace();	
}, 1000);
const Header = () => {
    return <header>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SystemandSoftware</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
                <i data-feather="home"></i>Inicio</Nav.Link>
            <Nav.Link href="#link">
            <i data-feather="users"></i> Nosotros</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <i data-feather="shield"></i> Desarrollo de software</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <i data-feather="shopping-cart"></i> Tiendas Virtuales
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <i data-feather="home"></i>Desarrollo web</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">
                <i data-feather="book"></i>Portafolios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>;
  }
  
  export default Header;