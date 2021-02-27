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
import Menu from './components/Menu';
import Report from './components/Report';
import Settings from './components/Settings';
import UpdateMenuItem from './components/UpdateMenuItem';
import UserLogin from './components/UserLogin';
import CreateUser from './components/CreateUser';

export default function App(){

    return (
        <Router>
            <NavBar />
            <Route path="/AdminDashboard" component={AdminDashboard} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Settings" component={Settings} /> 
            <Route path="/CreateMenuItem" component={CreateMenuItem} />    
            <Route path="/Report" component={Report} />   
            <Route path="/UpdateMenuItem" component={UpdateMenuItem} /> 
            <Route path="/CreateUser" component={CreateUser}  />
            <Route exact path="/" component={UserLogin} />   
            <Route path="/Cart" component={Cart} />  

        </Router>  
    );
}
