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

function Upgrade() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <Card>
              <Card.Body className="all-icons">
                <Row>
                  <Col lg="4" sm="1"></Col>
                  <Col className="font-icon-list" lg="4" sm="10" style={{marginBottom: '20vh', marginTop: '20vh'}}>
                    <div className="font-icon-detail" style={{border: 'none'}}>
                      <i className="nc-icon nc-cloud-upload-94"></i>
                      <p>Drag-and-drop the file to upload</p>
                    </div>
                  </Col>
                  <Col lg="4" sm="1"></Col>
                </Row>
                <Row>
                  <Col lg="4" sm="1"></Col>
                  <Col lg="4" sm="10" style={{display: 'grid'}}>
                    <Button
                      className="btn-fill"
                      href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react/?ref=lbdrupgrade"
                      target="_blank"
                      variant="info"
                    >
                      Upload new golf data
                    </Button>
                  </Col>
                  <Col lg="4" sm="1"></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
