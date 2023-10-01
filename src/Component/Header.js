import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><h2>Todo List</h2></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;