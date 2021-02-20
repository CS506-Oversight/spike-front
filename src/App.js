import React from 'react';
import { BrowserRouter as Router, Route } from 
"react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Inventory from "./components/inventory.component";
import ManageMenu from "./components/manage-menu.component";
import Messages from "./components/messages.component";
import Navbar from "./components/navbar.component";
import RestockPurchases from "./components/restock-purchases.component";

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
    </Router>
    );
}

export default App;