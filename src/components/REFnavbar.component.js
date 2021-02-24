import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">A Landing Page</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
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
                </ul>
                </div>
            </nav>
        );
    }
    
}
