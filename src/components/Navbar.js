import { render } from '@testing-library/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

function CustomerNavBar(props) {

    const clientUser = useSelector((state) => state.clientUser);
    
    return(
            <Navbar.Collapse id="collapse navbar-collapse" className="justify-content-end">
                <Nav className="mr-auto">
                    <Nav.Link href="/order">Place Order</Nav.Link>
                    <Nav.Link href="/settings">Settings</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Item className="d-inline-block align-top">
                    <FontAwesomeIcon icon={faShoppingBasket} color="white" size="2x" fixedWidth />
                    </Nav.Item>
                    <Nav.Item>
                        <Navbar.Text className="justify-content-end">
                            
                            {props.givenUser.currentUser.isLoggedIn && 
                                <p>                                
                                    Signed in as: {props.givenUser.currentUser.user.username}
                                </p>
                                
                            }
                        </Navbar.Text>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
    )
}
function StaffNavBar(props) {

    const clientUser = useSelector((state) => state.clientUser);

    return (
        <div>
            <Navbar.Collapse id="collapse navbar-collapse" className="justify-content-end">
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/settings">Settings</Nav.Link>
                </Nav>
                <Nav>
                    <Navbar.Text className="justify-content-end">
                        {props.givenUser.currentUser.isLoggedIn && 
                            <div>
                            Signed in as: {props.givenUser.currentUser.user.username}
                            </div>             
                        }
                        
                    </Navbar.Text>
                </Nav>

            </Navbar.Collapse>
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