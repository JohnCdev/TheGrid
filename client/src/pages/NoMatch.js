import React from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Nav from "../components/Nav/Nav";
import Header from '../components/Header/Header';

function NoMatch() {
  return (
    <>
    <Nav />
    <Container fluid>
      <Header headerText={404}/>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default NoMatch;
