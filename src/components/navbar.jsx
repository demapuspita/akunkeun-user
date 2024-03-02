import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary shadow-sm">
      <Container>
        <Navbar.Brand href="/beranda">
          <img src="./images/logo-user.png" width="100" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={NavLink} to="/beranda" style={({ isActive }) => {
              return {
                color: isActive ? "#082A99" : "",
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "3px solid #FFC107" : "none",
                };
              }}>
              Beranda</Nav.Link>
            <Nav.Link as={NavLink} to="/perjadin" style={({ isActive }) => {
              return {
                color: isActive ? "#082A99" : "",
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "3px solid #FFC107" : "none",
                };
              }}>
                Perjalanan Dinas</Nav.Link>
            <Nav.Link as={NavLink} to="/kegiatan" style={({ isActive }) => {
              return {
                color: isActive ? "#082A99" : "",
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "3px solid #FFC107" : "none",
                };
              }}
              >Buat Kegiatan</Nav.Link>
            <Nav.Link as={NavLink} to="/fasilitas" style={({ isActive }) => {
              return {
                color: isActive ? "#082A99" : "",
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "3px solid #FFC107" : "none",
                };
              }}>
                Fasilitas</Nav.Link>
            <NavDropdown title="Kegiatanku" id="basic-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">Perjalanan Dinas</NavDropdown.Item>
                <NavDropdown.Item  as={NavLink} to="/result" style={({ isActive }) => {
              return {
                color: isActive ? "#082A99" : "",
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "3px solid #FFC107" : "none",
                backgroundColor: isActive? "transparent" : "none",
                };
              }}>Program Kegiatan</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="#home"><FontAwesomeIcon icon={faBoxOpen} /> <span  className='hide-profile'>Barang Saya</span></Nav.Link>
                <Nav.Link as={NavLink} to="#link"><FontAwesomeIcon icon={faBell} /> <span  className='hide-profile'>Pemberitahuan</span></Nav.Link>
                <Nav.Link as={NavLink} to="#link"><FontAwesomeIcon icon={faUser} /> <span  className='hide-profile'>Profile Saya</span></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;