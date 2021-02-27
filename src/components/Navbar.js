import { render } from '@testing-library/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function CustomerNavBar(props) {

    
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
                    <Link to="/Orders" className="nav-link">Orders</Link>
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
                    <Link to="/UserLogin" className="nav-link">User Login</Link>
                    </li>

        </ul>
        </div>
    )
}
function StaffNavBar(props) {
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
                    <Link to="/Orders" className="nav-link">Orders</Link>
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
                    <Link to="/UserLogin" className="nav-link">User Login</Link>
                    </li>
        </ul>
        </div>
    )
}
function UserTypeInfo(props) {

}

export default function NavBar(props){
    
    const clientUser = useSelector((state) => state.clientUser);
    
    const userType = clientUser.currentUser.user.type;

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">AutoRack ORM</Link>
            {userType == "admin" || userType == "staff"  ?
                <StaffNavBar /> : <CustomerNavBar/>
            }
            
        </nav>
    );
}
