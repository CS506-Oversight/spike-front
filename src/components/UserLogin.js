import React, { useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
//import history from '../history';

//actions
import { submitUser } from '../actions/auth';




import { withRouter } from "react-router-dom";

export default function UserLogin(props){

    
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUserType] = useState("");
    
    const currentUser = useSelector( (state) => state.clientUser.currentUser);
    const isLoggedIn = useSelector( (state) => state.clientUser.currentUser.isLoggedIn);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        let userData = {
            username: username,
            password: password,
        }
        dispatch(submitUser(userData));
    };
    

    const dispatch = useDispatch();
    
    return (
        <Container fluid="md">
            <Form onSubmit={e => {handleSubmit(e)}}>
            <Form.Group as={Row} sm={8} controlId="inlineFormInput">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={username} onChange={e => setUser(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me!" />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Login
            </Button>
            </Form>
        </Container>
    );
}
