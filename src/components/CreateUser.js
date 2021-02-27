import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useDispatch } from 'react-redux';

//actions
import { createUser } from '../actions/settingsActions';


export default function CreateUser(props) {

    const dispatch = useDispatch();

    const[username, setUser] = useState("");
    const[password, setPassword] = useState("");
    const[phone, setPhone] = useState("");
    const[address, setAddr] = useState("");
    const[email, setEmail] = useState("");
    const[type, setType] = useState("");



    const handleChange = (e) => {
        e.preventDefault();
        let newUserData = {
            username: username,
            password: password,
            phone: phone,
            address: address,
            email: email,
            type: type,
        }
        dispatch(createUser(newUserData));

    };
    
    

    return (
              
        <Container style={{height: '80px', width : '600px'}}>
            <br></br>
            <Form onSubmit={e => {handleChange(e)}}>
                <Card>
                    <Card.Header>
                        <h5>Create User</h5>
                    </Card.Header>
                    <Card.Header>
                        <h5>Enter Username</h5>
                    </Card.Header>
                    <Form.Group controlId="inlineFormInput">
                        <Form.Control type="text" placeholder="Enter Current Username" value={username} onChange={e => setUser(e.target.value)} />
                    </Form.Group>
                    <Card.Header>
                        <h5>Enter Email</h5>
                    </Card.Header>
                    <Form.Group controlId="inlineFormInput">     
                        <Form.Control type="text" placeholder="Enter Current Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Card.Header>
                        <h5>Enter Password</h5>
                    </Card.Header>
                        <Form.Control type="password" placeholder="Enter Current Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>


                    <Form.Group controlId="inlineFormInput">
                    <Card.Header>
                        <h5>Enter Phone Number</h5>
                    </Card.Header>
                        <Form.Control type="text" placeholder="Enter Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
                    </Form.Group>


                    <Form.Group controlId="inlineFormInput">
                    <Card.Header>
                        <h5>Enter Address</h5>
                    </Card.Header>
                        <Form.Control type="text" placeholder="Enter Current Address" value={address} onChange={e => setAddr(e.target.value)} />
                        <Form.Text className="text-muted">
                            Please enter all fields.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="inlineFormInput">
                        <Card.Header>
                            <h5>Enter Type</h5>
                        </Card.Header>
                            <Form.Control as="select" placeholder="Enter Current Type" value={type} onChange={e => setType(e.target.value)} >
                                <option>Customer</option>
                                <option>Staff</option>
                            </Form.Control>
                    </Form.Group>
                    
                    <Button style={{height: '40px', width : '200px'}} variant="primary" type="submit">
                        Update Settings
                    </Button>
                    
                </Card>
            </Form>
         </Container>   
        
    );
} 