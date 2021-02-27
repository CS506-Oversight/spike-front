
import React from 'react';
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";

import CreateMenuItem from "./CreateMenuItem";
import UpdateMenuItem from "./UpdateMenuItem";
import Report from "./Report";
import {Col, Row} from "react-bootstrap";


function AdminDashboard() {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Menu
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Row>
                            <Col lg={6}>
                                <CreateMenuItem/>
                            </Col>
                            <Col lg={6}>
                                <UpdateMenuItem/>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col lg={12}>
                                <Report/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Orders
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm the Orders Info</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Pick Ups
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm the PickUp Info. Receipts should
                        e printed here
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Settings
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Hello! I'm the Settings. Admins and staff should
                        be able to save/modify username, password.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default AdminDashboard;
