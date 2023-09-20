import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import Projects from "../Projects/Projects.js";
import classes from "./Home.module.css";
import Bird from "../animation/bird";

function Home() {
  return (

    <section>
      <Container fluid className={classes["home-section"]} id="home">
        <Particle />
        <Container className={classes["home-content"]}>
          <Row>
            <Col md={7} className={classes["home-header"]}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span
                  className={classes.wave}
                  role="img"
                  aria-labelledby="wave"
                >
                  👋🏻
                </span>
              </h1>

              <h1 className={classes["heading-name"]}>
                My name is:
                <strong className="main-name"> Simon Pham</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={4} className={classes.colWrapper}>
              <Bird quote={"Looking for a job now"}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Projects />
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
