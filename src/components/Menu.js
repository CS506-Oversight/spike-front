import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//actions
import { addMenu } from '../actions/menu';

function Menu() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Name 1</Card.Title>
                <Card.Text>
                Item Description
                    <br></br>
                    price
                    <br></br>
                    type
                    <br></br>
                    in_stock
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
            <br></br>
            <br></br>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Name 2</Card.Title>
                <Card.Text>
                    Item Description
                    <br></br>
                    price
                    <br></br>
                    type
                    <br></br>
                    in_stock
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
} 

export default Menu;
