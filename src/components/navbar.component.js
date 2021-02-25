import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  { simpleAction } from '../actions/simpleAction';



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
            <Link to="/inventory" className="nav-link">Inventory</Link>
            </li>
            <li className="navbar-nav mr-auto">
            <Link to="/manageMenu" className="nav-link">Manage Menu</Link>
            </li>
            <li className="navbar-nav mr-auto">
            <Link to="/messages" className="nav-link">Messages</Link>
            </li>
            <li className="navbar-nav mr-auto">
            <Link to="/restockPurchases" className="nav-link">Restock RestockPurchases</Link>
            </li>
        </ul>
        </div>
    )
}
function UserTypeInfo(props) {

}

export default function NavBar(props){
    
    const currentUser = useSelector((state) => state.clientUser);
    const userType = currentUser.currentUser.user.type;

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">AutoRack ORM</Link>
            {userType == "admin" || userType == "staff"  ?
                <StaffNavBar /> : <CustomerNavBar/>
            }
            
        </nav>
    );
}

{/* class Navbar extends Component {

    componentDidMount(){
        this.props.simpleAction();
    }

    render() {
        return (


        );
    }
}
const mapStateToProps = state => ({
    user: state.result,
    userType: state.userType,
}) */}
{/* export default connect(mapStateToProps, { simpleAction })(Navbar); */}