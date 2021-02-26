  
import { render } from '@testing-library/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function CustomerNavBar(props) {

    
    return(
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
            <li className="navbar-nav mr-auto">
            <Link to="/inventory" className="nav-link">Place Order</Link>
            </li>
            <li className="navbar-nav mr-auto">
            <Link to="/manageMenu" className="nav-link">Settings</Link>
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
            <Link to="/inventory" className="nav-link">Dashboard</Link>
            </li>
            <li className="navbar-nav mr-auto">
            <Link to="/manageMenu" className="nav-link">Settings</Link>
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