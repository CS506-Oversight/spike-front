import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

function Pickup() {

    return (
        <Jumbotron>
            <h1>Thanks For Your Order!</h1>
            <p>
                Your pickup time is: "Pickup Time Here"
                <br></br>
                If you would like a receipt emailed to you please click below.
            </p>
            <p>
                <Button variant="primary">Email Me A Receipt</Button>
            </p>
      </Jumbotron>
    );
} 

export default Pickup;


