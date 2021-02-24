import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';

function mapStateToProps(state){
    return {
        user: state.user,
        password: state.password,
    }
}

function UserLogin(props){
    let submit = (e) => {
        e.preventDefault();
        console.log('fire! 🚀');
        const post = {
            username: this.state.username,
            password: this.state.password
        }
    
        this.props.submitUser(post);
    };
    
    return (
        <Form>
        <Form.Group controlId="inlineFormInput">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={submit}>
            Login
        </Button>
        </Form>
    );
}

export default connect(mapStateToProps)(UserLogin);