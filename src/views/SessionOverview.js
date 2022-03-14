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
  Table
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

/**
 * Returns an iframe with an embedded YouTube video, given a YouTube video link.
 * @param {string} url regular YouTube video link, 
 *  e.g. https://www.youtube.com/watch?v=QtpIhktaXlc
 * @returns iframe
 */
function embedVideo(url) {
    const videoWidth = 300
    const videoHeight = 150
    url = url.replace("/watch?v=", "/embed/")
    
    return <iframe width={videoWidth} height={videoHeight} 
        src={url} title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen>
    </iframe>
}

const recsCard = (
    <Card className="strpied-tabled-with-hover">
        <Card.Header>
            <Card.Title as="h4">Recommendations</Card.Title>
            <p className="card-category">
                Click on a technique to get more information
            </p>
        </Card.Header>
        <Card.Body className="table-full-width table-responsive px-0">
            <Table className="table-hover">
                <thead>
                <tr>
                    <th className="border-0">Technique</th>
                    <th className="border-0">Reason</th>
                    <th className="border-0">Difficulty</th>
                    <th className="border-0">Video</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><a href="">Follow Through</a></td>
                    <td>Stopping your swing too early</td>
                    <td>Beginner</td>
                    <td>{embedVideo("https://www.youtube.com/watch?v=0hXNXt94hOI")}</td>
                </tr>
                <tr>
                    <td><a href="">Quiet Hands in the Takeaway</a></td>
                    <td>Using your wrists too much during the takeaway</td>
                    <td>Intermediate</td>
                    <td>{embedVideo("https://www.youtube.com/watch?v=X8Y6tthcOcE")}</td>
                </tr>
                <tr>
                    <td><a href="">Avoid Sliding</a></td>
                    <td>Sliding forward</td>
                    <td>Expert</td>
                    <td>{embedVideo("https://www.youtube.com/watch?v=QtpIhktaXlc")}</td>
                </tr>
                </tbody>
            </Table>
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
