import React, { useEffect, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from './actions/alertActions'
import { loadStripe } from "@stripe/stripe-js";
import { composeWithDevTools } from "redux-devtools-extension";

//components
import NavBar from "./components/Navbar";
import AdminDashboard from './components/AdminDashboard';
import Cart from './components/Cart';
import CreateMenuItem from './components/CreateMenuItem';
import CustomerDashboard from './components/CustomerDashboard';
import Menu from './components/Menu';
import Orders from './components/Orders';
import Pickup from './components/Pickup';
import Report from './components/Report';
import Settings from './components/Settings';
import UpdateMenuItem from './components/UpdateMenuItem';
import UserLogin from './components/UserLogin';

export default function App(){

    return (
        <Router>
            <NavBar />
            <Route path="/AdminDashboard" component={AdminDashboard} />
            <Route path="/CustomerDashboard" component={CustomerDashboard} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Pickup" component={Pickup} />    
            <Route path="/CreateMenuItem" component={CreateMenuItem} />    
            <Route path="/Report" component={Report} />   
            <Route path="/UpdateMenuItem" component={UpdateMenuItem} />   
            <Route exact path="/" component={UserLogin} />   
            <Route path="/Cart" component={Cart} />  

        </Router>  
    );
}
