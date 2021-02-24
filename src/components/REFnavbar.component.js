import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            //For staff and Admin
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">A Landing Page</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-nav mr-auto">
                    <Link to="/messages" className="nav-link">Update menu(stock-wise)</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/restockPurchases" className="nav-link">Print/Prioritize Orders</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/inventory" className="nav-link">Modify Menu</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/manageMenu" className="nav-link">Print Usage Reports</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
    
}