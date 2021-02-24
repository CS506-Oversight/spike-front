import React, { Component } from 'react';
import Table from "react-bootstrap/Table";

function Menu() {
    //Can also turn table into Cards instead
    return (
        <Table striped bordered hover>

            <thead>
            <tr>
                <th>Item</th>
                <th>Picture</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Fries</td>
                <td>"Picture Here If Needed"</td>
                <td>Delicious</td>
                <td>$1.50</td>
            </tr>
            <tr>
                <td>Burger</td>
                <td>"Picture Here If Needed"</td>
                <td>Yummy</td>
                <td>$2</td>
            </tr>
            <tr>
                <td>Drink</td>
                <td>"Picture Here If Needed"</td>
                <td>Any size drink</td>
                <td>$1</td>
            </tr>
            </tbody>

            <h2>
                Can also be turned into bootstrap Cards
                instead
            </h2>
            
      </Table>
    );
} 

export default Menu;
