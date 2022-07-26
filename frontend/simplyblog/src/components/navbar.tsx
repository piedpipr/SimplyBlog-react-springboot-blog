import *  as React from 'react';
import { NavLink } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faNoteSticky, faSearch, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export interface NavbarProps {
}

export interface NavbarState {
}

export default class SiteNavbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <LinkContainer to="/"><Navbar.Brand href="#home">SimplyBlog</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="add"><Nav.Link><FontAwesomeIcon icon={ faNoteSticky }/> Add Post</Nav.Link></LinkContainer>
          <LinkContainer to="profile"><Nav.Link><FontAwesomeIcon icon={ faGear }/> Profile</Nav.Link></LinkContainer>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item>Dummy Menu</NavDropdown.Item>
              <NavDropdown.Item>
                Another Dummy Menu
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <LinkContainer to="login"><Nav.Link>Log In<FontAwesomeIcon icon={ faSignIn }/></Nav.Link></LinkContainer>
          <LinkContainer to="register"><Nav.Link>Register <FontAwesomeIcon icon={ faSignOut }/></Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    );
  }
}
