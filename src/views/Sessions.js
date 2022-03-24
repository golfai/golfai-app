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

function Sessions() {
  const history = useHistory();

  function linkToOverview() {
    history.push('/admin/session/overview');
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Past Golf Sessions</Card.Title>
                <p className="card-category">
                  Click on a row to show more information
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">File Name</th>
                      <th className="border-0">Swings</th>
                      <th className="border-0">Session Focus</th>
                      <th className="border-0">Recommendations</th>
                      <th className="border-0">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr onClick={linkToOverview}>
                      <td>1</td>
                      <td>swing_at_the_greens.csv</td>
                      <td>33</td>
                      <td>long game</td>
                      <td>3</td>
                      <td>The Greens Range</td>
                    </tr>
                    <tr onClick={linkToOverview}>
                      <td>2</td>
                      <td>lagrange_swing.csv</td>
                      <td>15</td>
                      <td>long game</td>
                      <td>5</td>
                      <td>Lagrange Golf</td>
                    </tr>
                    <tr onClick={linkToOverview}>
                      <td>3</td>
                      <td>greens_practice.csv</td>
                      <td>40</td>
                      <td>short game</td>
                      <td>9</td>
                      <td>The Greens Range</td>
                    </tr>
                    <tr onClick={linkToOverview}>
                      <td>4</td>
                      <td>good_day_lagrange.csv</td>
                      <td>56</td>
                      <td>follow through</td>
                      <td>11</td>
                      <td>Lagrange Golf</td>
                    </tr>
                    <tr onClick={linkToOverview}>
                      <td>5</td>
                      <td>second_greens_day.csv</td>
                      <td>25</td>
                      <td>avoid sliding</td>
                      <td>15</td>
                      <td>The Greens Range</td>
                    </tr>
                    <tr onClick={linkToOverview}>
                      <td>6</td>
                      <td>first_time_golfing.csv</td>
                      <td>20</td>
                      <td>rolling wrists</td>
                      <td>22</td>
                      <td>The Greens Range</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sessions;
