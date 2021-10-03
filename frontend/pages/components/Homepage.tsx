import React from "react";
import styles from "../../styles/Home.module.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

// import { faDiscord } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>Bulbbot</h1>

    <p className={styles.description}>
      Take Discord Moderation to the next level
    </p>

    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button
          size="lg"
          style={{
            backgroundColor: "#E8C547",
            color: "black",
            border: "none",
          }}
          href="/invite"
          target="_blank"
        >
          Invite Bulbbot
        </Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button
          size="lg"
          style={{
            backgroundColor: "#CDD1C4",
            color: "black",
            border: "none",
          }}
          href="https://docs.bulbbot.rocks"
        >
          Documentation
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button
          size="lg"
          style={{
            backgroundColor: "#5C80BC",
            color: "black",
            border: "none",
          }}
          href="/support"
          target="_blank"
        >
          Support
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  </main>
);

export default Homepage;
