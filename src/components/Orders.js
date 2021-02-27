import React from 'react';
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";

//actions
import { loadOrders } from '../actions/orderActions';

export default function Orders() {

  return (
    <Jumbotron>
        <div>
            <CardDeck>
                {isloading ? "Loading..." : currentMenu.menuItems.menu.map((item, index) => (
                    
                    <Card key={index} style={sampleStyle}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        {item.description}
                            <br></br>
                            ${item.price}
                            <br></br>
                            type
                            <br></br>
                            in_stock
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>    
                    </Card>        
                ))}
            </CardDeck>
        </div>
    </Jumbotron>
  );
}
