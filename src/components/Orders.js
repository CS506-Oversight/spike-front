import React from 'react';
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";

function Orders() {

  return (
    <Jumbotron>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First Order"
                />
                <Carousel.Caption>
                    <h3>First Order</h3>
                    <p>Order Info Here</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="Second Order"
                />
                <Carousel.Caption>
                    <h3>Second Order</h3>
                    <p>Order Info Here</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="Third Order"
                />
                <Carousel.Caption>
                    <h3>Third Order</h3>
                    <p>Order Info Here</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Jumbotron>
  );
}

export default Orders;
