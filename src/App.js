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
import Landing from './components/Landing';
import Orders from './components/Orders';
import Report from './components/Report';
import UserLogin from './components/UserLogin';
import Cart from './components/Cart';


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
        {/* <Landing /> */}
        {/* <Orders /> */}
        {/* <Report /> */}
        {/* <UserLogin /> */}
        {/* <Cart /> */}
        
        <Route path="/Landing" component={Landing} />
        <Route path="/AdminDashboard" component={AdminDashboard} />
        <Route path="/CustomerDashboard" component={CustomerDashboard} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Settings" component={Settings} />
        <Route path="/Pickup" component={Pickup} />
        <Route path="/Orders" component={Orders} />
        <Route path="/Report" component={Report} />
        <Route path="/UserLogin" component={UserLogin} />
        <Route path="/Cart" component={Cart} />


    </Router>
    );
}

export default App;