import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner"

//actions
import { loadMenu } from '../actions/customerActions';

function Menu() {
    const dispatch = useDispatch();
    const currentMenu = useSelector((state) => state.customer);
    const {isloading, error, menu} = currentMenu;

    useEffect(() => {
        dispatch(loadMenu());

    }, [])

   
    // const isloading = useSelector((state) => state.isloading);
    
    // const menu = currentMenu.menu;
    const sampleStyle = {
        minWidth: "20%",
        flexGrow: 0
      };

    const styles = {
        marginLeft:'20px'
    }
    return (

        <div style={styles}>
            <br></br>
            <CardDeck>
                {isloading ? <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner> : currentMenu.menuItems.menu.map((item, index) => (
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
    );
} 

export default Menu;
