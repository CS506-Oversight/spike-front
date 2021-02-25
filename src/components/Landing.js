import React from 'react';
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";

function Landing() {

  return (
    <Jumbotron>
        <h1>Welcome to Our Restaurant!</h1>
        <p>
            Sign up to start making orders, or log in if you
            already have an account!
        <br></br>
        </p>
        <p>
            <Button variant="primary">Sign Up</Button>
            <br></br>
            <br></br>
            <Button variant="primary">Log In</Button>
        </p>
    </Jumbotron>
  );
}

export default Landing;
