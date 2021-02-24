import React, { useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//actions
import { submitUser } from '../actions/auth';




export default function UserLogin(props){


    const [ username, setUser] = useState();
    const  [password, setPassword] = useState();
    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        let userData = [username,password];
        dispatch(submitUser(userData));
        //submitUser(userData);
    };
    const currentUser = useSelector( (state) => state.user);

    const dispatch = useDispatch();
    
    return (
        <Form onSubmit={e => {handleSubmit(e)}}>
        <Form.Group controlId="inlineFormInput">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" value={username} onChange={e => setUser(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" >
            Login
        </Button>
        </Form>
    );
}