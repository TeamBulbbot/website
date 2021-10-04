import React from "react";
import styles from "../../styles/Home.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarComp = () => (
  <Navbar bg="light" expand="lg" className="navbar-item">
    <Container>
      <Navbar.Brand href="#home" className="navbar-item">
        Bulbbot
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/invite" target="_blank" className="navbar-item">
            Adding Bulbbot
          </Nav.Link>
          <Nav.Link href="https://docs.bulbbot.rocks" className="navbar-item">
            Documentation
          </Nav.Link>
          <Nav.Link
            href="https://docs.bulbbot.rocks/command-list"
            className="navbar-item"
          >
            Commands
          </Nav.Link>
          <Nav.Link
            href="https://www.patreon.com/bulbbot"
            target="_blank"
            className="navbar-item"
          >
            Patreon
          </Nav.Link>
          <Nav.Link
            href="https://github.com/TeamBulbbot/bulbbot/"
            target="_blank"
            className="navbar-item"
          >
            Github
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/discord" target="_blank" className="navbar-item">
            Support
          </Nav.Link>
          <Nav.Link
            href="https://docs.bulbbot.rocks/team"
            className="navbar-item"
          >
            The Team
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComp;
