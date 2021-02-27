import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from 'react-redux';

//actions
import { updateUser } from '../actions/settingsActions'

export default function Settings(props) {
    const dispatch = useDispatch();
    const currentUser = useSelector( (state) => state.clientUser.currentUser);

    const[username, setUser] = useState("");
    const[password, setPassword] = useState("");
    const[phone, setPhone] = useState("");
    const[address, setAddr] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        let currentUsername = currentUser.user.username;
        console.log(currentUsername, username, password, phone, address);
        let userData = {
            currentUsername: currentUsername,
            username: username,
            password: password,
            phone: phone,
            address: address,
        }
        dispatch(updateUser(userData));

    };
    
    

    return (
        
        
        <Container style={{height: '80px', width : '600px'}}>
            <Form onSubmit={e => {handleChange(e)}}>
                <Card>
                    <Card.Header>
                        <h5>Enter Username</h5>
                    </Card.Header>
                    <Form.Group controlId="inlineFormInput">
                            
                        <Form.Control type="text" placeholder="Enter New or Current Username" value={username} onChange={e => setUser(e.target.value)} />
                        </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                    <Card.Header>
                        <h5>Enter Password</h5>
                    </Card.Header>
                        <Form.Control type="text" placeholder="Enter New or Current Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>


                    <Form.Group controlId="inlineFormInput">
                    <Card.Header>
                        <h5>Enter Phone Number</h5>
                    </Card.Header>
                        <Form.Control type="text" placeholder="Enter New or Current Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
                    </Form.Group>


                    <Form.Group controlId="inlineFormInput">
                    <Card.Header>
                        <h5>Enter Address</h5>
                    </Card.Header>
                        <Form.Control type="text" placeholder="Enter New or Current Address" value={address} onChange={e => setAddr(e.target.value)} />
                        <Form.Text className="text-muted">
                            Please enter all fields. For any 
                            setting that you do not want to change,
                            enter your current information.
                        </Form.Text>
                    </Form.Group>
                    
                    <Button style={{height: '40px', width : '200px'}} variant="primary" type="submit">
                        Update Settings
                    </Button>
                    
                </Card>
                <br/>
            </Form>
         </Container>   
        
    );
} 
