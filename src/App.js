import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 
"react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { loadStripe } from "@stripe/stripe-js";
import { composeWithDevTools } from "redux-devtools-extension";



// import Inventory from "./components/inventory.component";
// import ManageMenu from "./components/manage-menu.component";
// import Messages from "./components/messages.component";
// import RestockPurchases from "./components/restock-purchases.component";
// import Checkout from './components/checkout.component';
import Navbar from "./components/navbar.component";
import AdminDashboard from './components/AdminDashboard';

import UserLogin from './components/UserLogin';


//TODO Need to know what components go inside of ""



export default function App(){
    return (
        <Router>
            <Navbar />
            <br/>
            <UserLogin/>
            <br/>
        </Router>  
    );
}
