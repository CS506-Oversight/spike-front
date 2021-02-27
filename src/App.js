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
import Cart from './components/Cart';
import CreateMenuItem from './components/CreateMenuItem';
import CustomerDashboard from './components/CustomerDashboard';
import Menu from './components/Menu';
import Orders from './components/Orders';
import Pickup from './components/Pickup';
import Report from './components/Settings';
import Settings from './components/Settings';
import UpdateMenuItem from './components/UpdateMenuItem';
import UserLogin from './components/UserLogin';

export default function App(){

    const alert = useSelector((state) => state.alert);
    const isLoggedIn = useSelector((state) => state.clientUser.currentUser.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {

    })

    return (
        <Router>
            <Navbar />
            <Route path="/AdminDashboard" component={AdminDashboard} />
            <Route path="/CustomerDashboard" component={CustomerDashboard} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Pickup" component={Pickup} />    
            <Route path="/CreateMenuItem" component={CreateMenuItem} />   
            <Route path="/Orders" component={Orders} />   
            <Route path="/Report" component={Report} />   
            <Route path="/UpdateMenuItem" component={UpdateMenuItem} />   
            <Route path="/UserLogin" component={UserLogin} />   
            <Route path="/Cart" component={Cart} />  



        </Router>  
    );
}
