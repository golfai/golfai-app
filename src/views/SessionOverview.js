import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const ghostCard = (
  <Card>
    <Card.Header>
      <Card.Title as="h4">Ghost Overlay</Card.Title>
    </Card.Header>
    <Card.Body className="ml-auto mr-auto">
      <div style={{paddingBottom: '5vh'}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PHRkgBIdoFY?start=22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </Card.Body>
  </Card>
);

const rawCard = (
  <Card>
    <Card.Header>
      <Card.Title as="h4">Raw Data</Card.Title>
    </Card.Header>
  </Card>
);

const recsCard = (
  <Card>
    <Card.Header>
      <Card.Title as="h4">Recommendations</Card.Title>
    </Card.Header>
    <Card.Body className="ml-auto mr-auto">
      <div style={{paddingBottom: '5vh'}}>
        <p>Clearing Hips</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ni-1ZqbhAbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </Card.Body>
  </Card>
);

function showCard(e, setCard, cardName) {
  e.preventDefault();
  if (cardName === 'ghost') {
    return setCard(ghostCard)
  }

  if (cardName == 'raw') {
    return setCard(rawCard)
  }
  
  setCard(recsCard)
}

function SessionOverview() {
  const [card, setCard] = React.useState(recsCard);
  const [selected, setSelected] = React.useState("");

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Body>
                <Row>
                  <Col lg="4" sm="12" style={{display: 'grid'}}>
                    <Button
                      className="btn-fill"
                      type="link"
                      variant={ (selected === '') ? 'success' : 'info'}
                      onClick={(e) => {showCard(e, setCard, ''); setSelected('') }}
                    >
                      Recommendations
                    </Button>
                  </Col>
                  <Col lg="4" sm="12" style={{display: 'grid'}}>
                    <Button
                      className="btn-fill"
                      type="link"
                      variant={ (selected === 'ghost') ? 'success' : 'info'}
                      onClick={(e) => { showCard(e, setCard, 'ghost'); setSelected('ghost')}}
                    >
                      Ghost Overlay
                    </Button>
                  </Col>
                  <Col lg="4" sm="12" style={{display: 'grid'}}>
                    <Button
                      className="btn-fill btn-pull-right"
                      type="link"
                      variant={ (selected === 'raw') ? 'success' : 'info'}
                      onClick={(e) => { showCard(e, setCard, 'raw'); setSelected('raw')}}
                    >
                      Raw Data
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            {card}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SessionOverview;
