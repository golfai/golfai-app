import React from "react";
import SwingReplay from "./SwingReplay";
import ChartistGraph from "react-chartist";

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

const swingReplayCard = (
  <Card>
    <Card.Header>
      <Card.Title as="h4">Swing Replay</Card.Title>
    </Card.Header>
    <Card.Body className="ml-auto mr-auto">
        <SwingReplay/>
    </Card.Body>
  </Card>
);

const rawCard = (
<Container fluid>
  <Row>
    <Col lg="4" sm="6">
      <Card className="card-stats">
        <Card.Body>
          <Row>
            <Col xs="5">
              <div className="icon-big text-center icon-warning">
                <i className="nc-icon nc-chart text-warning"></i>
              </div>
            </Col>
            <Col xs="7">
              <div className="numbers">
                <p className="card-category">Total Swings</p>
                <Card.Title as="h4">33</Card.Title>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
    <Col lg="4" sm="6">
      <Card className="card-stats">
        <Card.Body>
          <Row>
            <Col xs="5">
              <div className="icon-big text-center icon-warning">
                <i className="nc-icon nc-spaceship text-danger"></i>
              </div>
            </Col>
            <Col xs="7">
              <div className="numbers">
                <p className="card-category">Average Ball Distance</p>
                <Card.Title as="h4">55,6 Meters</Card.Title>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
    <Col lg="4" sm="6">
      <Card className="card-stats">
        <Card.Body>
          <Row>
            <Col xs="5">
              <div className="icon-big text-center icon-warning">
                <i className="nc-icon nc-zoom-split text-primary"></i>
              </div>
            </Col>
            <Col xs="7">
              <div className="numbers">
                <p className="card-category">Average Ball Speed</p>
                <Card.Title as="h4">215 km/h</Card.Title>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col lg="4" sm="12" xs="12">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Swing Results</Card.Title>
          <p className="card-category">Ending location of golf ball</p>
        </Card.Header>
          <Card.Body>
            <div className="ct-chart" id="chartHours">
              <ChartistGraph
                data={{
                  series: [{
                    value: 17,
                    name: "Fairway"
                  },
                  {
                    value: 9,
                    name: "Off Fairway"
                  },
                  {
                    value: 4,
                    name: "Sand Pit"
                  },
                  {
                    value: 3,
                    name: "Water"
                  }],
                }}
                type="Pie"
                options={{
                  donut: false
                }}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="legend">
              <i className="fas fa-circle text-info"></i>
              Fairway <i className="fas fa-circle text-danger"></i>
              Off Fairway <i className="fas fa-circle text-warning"></i>
              Sand Pit <i className="fas fa-circle" style={{ color: "#9368E9", fill: "#9368E9" }}></i>
              Water
            </div>
          </Card.Footer>
      </Card>
    </Col>
    <Col lg="8" sm="12" xs="12">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Shot Spin</Card.Title>
          <p className="card-category">Direction the ball spinned midflight</p>
        </Card.Header>
          <Card.Body>
            <div className="ct-chart" id="chartHours">
              <ChartistGraph
                data={{
                  labels: ["No Spin", "Left Spin", "Right Spin", "Backspin"],
                  series: [[12, 15, 5, 1]],
                }}
                type="Bar"
                options={{
                  high: 20,
                  low: 0
                }}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="legend">
              <i className="fas fa-circle text-info"></i>
              Mike
            </div>
            <div style={{ float: "right", paddingTop: "5px" }}>
              <a href="#">
                + Add Users to Compare
              </a>
            </div>
          </Card.Footer>
      </Card>
    </Col>
  </Row>
</Container>
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
    return setCard(swingReplayCard)
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
                      Swing Replay
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
