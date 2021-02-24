import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";

function CustomerDashboard() {

    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Menu
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the Menu Info. But the receipt should
                be printed in Pick Ups.
              </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              My Cart
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm the Cart Info. Checking out should
                redirect to the Stripe payment page. After successful 
                payment, the customer should be redirected to the Pick
                Up page with a printed receipt and perhaps send the
                receipt to the email.
            </Card.Body>
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
              be printed here. After checking out, this page should
              automatically open. If no order has been placed should
              say so. 
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
            <Card.Body>Hello! I'm the Settings. Customers should 
              be able to save/modify username, password.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
} 

export default CustomerDashboard;


