import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//actions
import { loadMenu } from '../actions/customerActions';

function Menu() {

    
    const dispatch = useDispatch();
    dispatch(loadMenu());
    const isloading = useSelector((state) => state.isloading);
    const currentMenu = useSelector((state) => state.customer.menuItems);
    const menu = currentMenu.menu;

    return (
        <div>
            {isloading ? <br></br> : menu.map((item, index) => (
                 <Card key={index} style={{ width: '18rem' }}>
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
        </div>
    );
} 

export default Menu;
