import React from "react";
import styles from "../../styles/Home.module.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import Image from "next/image";
import logo from "../../public/logo.png";
import Tilt from "react-parallax-tilt";

// import { faDiscord } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = () => (
  <main className={styles.main}>
    <Tilt>
      <div>
        <Image src={logo} alt="Logo" width="200" height="200" />
      </div>
    </Tilt>
    <h1 className={styles.title}>Bulbbot</h1>

    <p className={styles.description}>
      Take Discord Moderation to the next level
    </p>

    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button size="lg" className="invite-btn" href="/invite" target="_blank">
          Invite Bulbbot
        </Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button
          size="lg"
          className="docs-btn"
          href="https://docs.bulbbot.rocks"
        >
          Documentation
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button
          size="lg"
          className="support-btn"
          href="/discord"
          target="_blank"
        >
          Support
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  </main>
);

export default Homepage;
