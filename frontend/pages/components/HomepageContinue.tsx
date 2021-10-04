import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

// @ts-ignore
const myLoader = ({ src, width, quality }) => {
  return `https://bulbbot.rocks/${src}?w=${width}&q=${quality || 75}`;
};

import automod from "../../public/automod.png";
import logging from "../../public/logging.png";
import infractions from "../../public/infractions.png";
import flags from "../../public/flags.png";

const HomepageContinue = () => (
  <>
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h2>Extensive automoderation (automod)</h2>
          <p>
            Keep all of the bad guys out of your server with our easy to
            configure automoderation, choice from a wide net of different
            features and confiugre to your liking.
          </p>
        </Col>

        <Col md="auto">
          <Tilt>
            <div>
              <Image // @ts-ignore
                loader={myLoader}
                src={automod}
                alt="Automod image"
                width="800"
                height="400"
              />
            </div>
          </Tilt>
        </Col>
      </Row>
      <div className="padding-whitespace-top" />
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Tilt>
            <div>
              <Image // @ts-ignore
                loader={myLoader}
                src={logging}
                alt="Logging iamge"
                width="700"
                height="400"
              />
            </div>
          </Tilt>
        </Col>
        <Col>
          <h2>Robust logging</h2>
          <p>
            Know what is going on in your server when you are asleep or away.
            Our logs make you never miss any deleted message, edits or if a
            moderator is banning someone.
          </p>
        </Col>
      </Row>
      <div className="padding-whitespace-top" />
      <Row className="justify-content-md-center">
        <Col>
          <h2>Infraction system</h2>
          <p>
            Infractions is the way you can keep track of what is happening
            without having to memories every single mod action that has happend
            on your server. Think of it like a large notepad of what is going on
            in your server.
          </p>
        </Col>

        <Col md="auto">
          <Tilt>
            <div>
              <Image // @ts-ignore
                loader={myLoader}
                src={infractions}
                alt="Infraction Image"
                width="450"
                height="600"
              />
            </div>
          </Tilt>
        </Col>
      </Row>
      <div className="padding-whitespace-top" />
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Tilt>
            <div>
              <Image // @ts-ignore
                loader={myLoader}
                src={flags}
                alt="Flags image"
                width="700"
                height="400"
              />
            </div>
          </Tilt>
        </Col>
        <Col>
          <h2>100% translation in 8 languages</h2>
          <p>
            We are always working on making it easier for people around the
            globe the use the bot. So why not translate it? With the help of our
            community we are proud to say that have 8 languages fully translated
            now
          </p>
        </Col>
      </Row>
    </Container>
    <div className="padding-whitespace-bot" />
  </>
);

export default HomepageContinue;
