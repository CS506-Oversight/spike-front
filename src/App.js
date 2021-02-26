import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Route } from 
"react-router-dom";
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

    const alert = useSelector((state) => state.alert);
    const isLoggedIn = useSelector((state) => state.clientUser.currentUser.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {

    })

    return (
        <Router>
            <Navbar />
            <br/>
            {isLoggedIn ? <br/> : <UserLogin/>}
            
            <br/>

            {/* <Menu /> */}


        </Router>  
    );
}
