import React from "react";
import { Alert } from 'reactstrap';

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


function SupportedThirdParty(props) {
    //imageUrl, thirdPartyUrl, thirdPartyName
    return (
        <>
            <Alert
                color="secondary"
                className="alert-with-icon"
            >
                <span data-notify="icon" className="nc-icon">
                    <img src={props.imageUrl}  style={{"margin-bottom": "10px", width: "20px", height: "20px"}}></img>
                </span>
                <span data-notify="message"><a href={props.thirdPartyUrl}>{props.thirdPartyName}</a></span>
            </Alert>
        </>
    );
}

class Upload extends React.Component {
    render() {
        return (
        <>
            <Container fluid>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <Card>
                            <Card.Header>
                                <h3 style={{"margin-top": 0}}>Upload session</h3>
                            </Card.Header>
                            <Card.Body className="all-icons">
                                <Row>
                                    <Col className="font-icon-list" lg="12" sm="12" style={{}}>
                                        <div>
                                            <p>You can upload the data exported from one of our supported third-party vendors here. This will then correspond to a new <a href="sessions">session</a> where you can receive recommendations for.</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="4" sm="1"></Col>
                                    <Col className="font-icon-list" lg="4" sm="10" style={{ marginBottom: '20vh', marginTop: '1vh' }}>
                                        <div className="font-icon-detail" style={{ border: 'none' }}>
                                            <i className="nc-icon nc-cloud-upload-94"></i>
                                            <p>Drag-and-drop a .csv file to upload</p>
                                        </div>
                                    </Col>
                                    <Col lg="4" sm="1"></Col>
                                </Row>
                                <Row>
                                    <Col lg="4" sm="1"></Col>
                                    <Col lg="4" sm="10" style={{ display: 'grid' }}>
                                        <Button
                                            className="btn-fill"
                                            href="#"
                                            target="_blank"
                                            variant="info"
                                        >
                                            Upload Golf Session
                                        </Button>
                                    </Col>
                                    <Col lg="4" sm="1"></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" md="4">
                    <Card>
                            <Card.Header>
                                Supported third-party vendors/products
                            </Card.Header>
                            <Card.Body className="all-icons">
                                <SupportedThirdParty 
                                    imageUrl="https://cdn.shopify.com/s/files/1/0087/0635/9356/files/Favicon_32x32.png?v=1589393101" 
                                    thirdPartyUrl="https://eu.arccosgolf.com/products/arccos-caddie-smart-sensors"
                                    thirdPartyName="Arccos Caddie Smart Sensors"
                                />
                                <SupportedThirdParty 
                                    imageUrl="https://www.trackman.com/favicon.ico" 
                                    thirdPartyUrl="https://www.trackman.com/golf/trackman-4"
                                    thirdPartyName="TrackMan 4"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
    }
}


export default Upload;
