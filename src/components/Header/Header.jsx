import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css"


class Header extends Component {
  render() {
    return (
      <>
      <div className="header">
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container className="header-container">
            <Navbar.Brand href="#"><h1>Notes</h1></Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      </>
    );
  }
}

export default Header;
