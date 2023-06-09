import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faHandPaper} /> SIGNify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <div>{children}</div>
      </div>
      <div className="footer">
        <p>Created by S Harsh and Viraj Bhat</p>
      </div>
    </>
  );
};

export default Layout;
