import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
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
        <Container>
            <Form onSubmit={e => {handleChange(e)}}>
                <Form.Group controlId="inlineFormInput">
                    <Form.Label>Change Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter New Username" value={username} onChange={e => setUser(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Change Password</Form.Label>
                    <Form.Control type="text" placeholder="Enter New Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="inlineFormInput">
                    <Form.Label>Change Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter New Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="inlineFormInput">
                    <Form.Label>Change Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter New Address" value={address} onChange={e => setAddr(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update Settings
                </Button>

            </Form>
        </Container>
    );
} 
