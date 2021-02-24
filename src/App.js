import React from 'react';
import { BrowserRouter as Router, Route } from 
"react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadStripe } from "@stripe/stripe-js";


import Navbar from "./components/REFnavbar.component";
import AdminDashboard from './components/AdminDashboard';
import CustomerDashboard from './components/CustomerDashboard';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Pickup from './components/Pickup';

//TODO Need to know what components go inside of ""
function App() {
    return(
    <Router>
        <Navbar />
        {/* <AdminDashboard /> */}
        {/* <CustomerDashboard /> */}
        {/* <Menu /> */}
        {/* <Settings /> */}
        {/* <Pickup /> */}
        
        <Route path="/AdminDashboard" component={AdminDashboard} />
        <Route path="/CustomerDashboard" component={CustomerDashboard} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Settings" component={Settings} />
        <Route path="/Pickup" component={Pickup} />


    </Router>
    );
}

export default App;
