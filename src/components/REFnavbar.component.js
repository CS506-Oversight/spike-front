import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/Landing" className="navbar-brand">A Landing Page</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-nav mr-auto">
                    <Link to="/Landing" className="nav-link">Landing</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/AdminDashboard" className="nav-link">Admin Dashboard</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/CustomerDashboard" className="nav-link">Customer Dashboard</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Menu" className="nav-link">Menu</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Settings" className="nav-link">Settings</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Pickup" className="nav-link">Pickup</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Orders" className="nav-link">Orders</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Report" className="nav-link">Report</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/UserLogin" className="nav-link">UserLogin</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Cart" className="nav-link">Cart</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
    
}
