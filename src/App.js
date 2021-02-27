import React, { useEffect, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//import history from './history';
import "bootstrap/dist/css/bootstrap.min.css";




import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from './actions/alertActions'
import { loadStripe } from "@stripe/stripe-js";
import { composeWithDevTools } from "redux-devtools-extension";


import Navbar from "./components/Navbar";

import AdminDashboard from './components/AdminDashboard';
import Menu from './components/Menu';
import Settings from './components/Settings';


import UserLogin from './components/UserLogin';

//TODO Need to know what components go inside of ""



export default function App(){

    return (
        <Router>
            <Navbar />
            <br/>
            <Switch>
                <Route path="/signin"><UserLogin /></Route> 
                <Route path="/orders"> <Menu/> </Route>
                <Route path="/dashboard"><p>dashboard</p></Route>
            </Switch>
        </Router>  
    );
}
