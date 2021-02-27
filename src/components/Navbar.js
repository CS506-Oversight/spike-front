import { render } from '@testing-library/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";

function CustomerNavBar(props) {

    const clientUser = useSelector((state) => state.clientUser);
    
    return(
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-nav mr-auto">
                    <Link to="/AdminDashboard" className="nav-link">Admin Dashboard</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Cart" className="nav-link">Cart</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/CreateMenuItem" className="nav-link">Create Menu Item</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/CreateUser" className="nav-link">Create User</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/CustomerDashboard" className="nav-link">Customer Dashboard</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Menu" className="nav-link">Menu</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Pickup" className="nav-link">Pickup</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Report" className="nav-link">Report</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Settings" className="nav-link">Settings</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/UpdateMenuItem" className="nav-link">Update Menu Item</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/" className="nav-link">User Login</Link>
                    </li>

        </ul>
        </div>
    )
}
function StaffNavBar(props) {

    const clientUser = useSelector((state) => state.clientUser);

    return (
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-nav mr-auto">
                    <Link to="/AdminDashboard" className="nav-link">Admin Dashboard</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Cart" className="nav-link">Cart</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/CreateMenuItem" className="nav-link">Create Menu Item</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/CreateUser" className="nav-link">Create User</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/CustomerDashboard" className="nav-link">Customer Dashboard</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Menu" className="nav-link">Menu</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Pickup" className="nav-link">Pickup</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Report" className="nav-link">Report</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/Settings" className="nav-link">Settings</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/UpdateMenuItem" className="nav-link">Update Menu Item</Link>
                    </li>
                    <li className="navbar-nav mr-auto">
                    <Link to="/" className="nav-link">User Login</Link>
                    </li>
        </ul>
        </div>
    )
}

export default function NavBar(props){
    
    const clientUser = useSelector((state) => state.clientUser);
    
    const userType = clientUser.currentUser.user.type;

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">AutoRack ORM</Navbar.Brand>
            {userType == "admin" || userType == "staff"  ?
                <StaffNavBar givenUser={clientUser} /> : <CustomerNavBar givenUser={clientUser} />
            }
        </Navbar>
    );
}
