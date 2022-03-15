import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SwingVideoPlayer() {
  const history = useHistory();

  function linkToOverview() {
    history.push('/admin/session/swing-player');
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            test
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SwingVideoPlayer;
