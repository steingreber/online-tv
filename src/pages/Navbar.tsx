import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll() {
  return (

    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
          <Navbar.Brand href="/">
                <img
                  alt="Gnove TV"
                  src="/src/img/television-tv-svgrepo-com.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  color='#FFF'
                />{' '}
                GNove TV
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Canais Abertos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Filmes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Filmes Clássicos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Filmes 24hs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Filmes Gospel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Seriados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Seriados Clássicos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Agro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Animes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Católicos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Desenhos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Documentários</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Educativos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Espiritas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Esporte</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Evangélicos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Faroeste</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Governamentáis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mundo em Notícias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Músicas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Músical Clips</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Notícias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rádios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Televendas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Variedades</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/comoassistir">Como Assistir</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScroll;