import React from "react";
import styles from "../../styles/Home.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarComp = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Bulbbot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/invite" target="_blank">
            Adding Bulbbot
          </Nav.Link>
          <Nav.Link href="https://docs.bulbbot.rocks">Documentation</Nav.Link>
          <Nav.Link href="https://docs.bulbbot.rocks/command-list">
            Commands
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/discord" target="_blank">
            Support
          </Nav.Link>
          <Nav.Link href="https://docs.bulbbot.rocks/team">The Team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComp;
