import React from 'react';
import { BrowserRouter as Router, Route } from 
"react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadStripe } from "@stripe/stripe-js";

import Inventory from "./components/inventory.component";
import ManageMenu from "./components/manage-menu.component";
import Messages from "./components/messages.component";
import Navbar from "./components/navbar.component";
import RestockPurchases from "./components/restock-purchases.component";
import Checkout from './components/checkout.component';

const stripePromise = loadStripe(
  "pk_test_51ILfndEl7Dm9pM8qO7w2ohjdyDPXNb7IMh7xf2Td68nK1P96pxd4tUghteuhYzDxhG9ZxVA4ySiZ4QdcgTSZY8X400HDD6yi7b"
);

//TODO Need to know what components go inside of ""
function App() {
    return(
    <Router>
        <Navbar />
        <br/>
        <Route path="/inventory" exact component={Inventory}/>
        <Route path="/manageMenu" component={ManageMenu}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/restockPurchases" component={RestockPurchases}/>
        <Route path="/checkout" component={Checkout} stripe={stripePromise}/>
    </Router>
    );
}

export default App;