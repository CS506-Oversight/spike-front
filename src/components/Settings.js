import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Settings() {

    return (
        <Form>
            <br></br>
            <Form.Group controlId="formBasicOldUser">
                <Form.Label>Change Username</Form.Label>
                <Form.Control type="oldUser" placeholder="Enter Old Username" />
            </Form.Group>
            <Form.Group controlId="formBasicNewUser">
                <Form.Control type="newUser" placeholder="Enter New Username" />
            </Form.Group>
            <Form.Text className="text-muted">
                Old username must be correct!
            </Form.Text>
            <Button variant="primary" type="submit">
                Change Username
            </Button>

            <br></br><br></br><br></br>
            <Form.Group controlId="formBasicOldPass">
                <Form.Label>Change Password</Form.Label>
                <Form.Control type="oldPass" placeholder="Enter Old Password" />
            </Form.Group>
            <Form.Group controlId="formBasicNewPass">
                <Form.Control type="newPass" placeholder="Enter New Password" />
            </Form.Group>
            <Form.Text className="text-muted">
                Old password must be correct!
            </Form.Text>
            <Button variant="primary" type="submit">
                Change Password
            </Button>

            <br></br><br></br><br></br>
            <Form.Group controlId="formBasicOldNumber">
                <Form.Label>Change Phone Number</Form.Label>
                <Form.Control type="oldNumber" placeholder="Enter Old Phone Number" />
            </Form.Group>
            <Form.Group controlId="formBasicNewNumber">
                <Form.Control type="newNumber" placeholder="Enter New Phone Number" />
            </Form.Group>
            <Form.Text className="text-muted">
                Old phone number must be correct!
            </Form.Text>
            <Button variant="primary" type="submit">
                Change Phone Number
            </Button>

            <br></br><br></br><br></br>
            <Form.Group controlId="formBasicOldAddress">
                <Form.Label>Change Address</Form.Label>
                <Form.Control type="oldAddress" placeholder="Enter Old Address" />
            </Form.Group>
            <Form.Group controlId="formBasicNewAddress">
                <Form.Control type="newAddress" placeholder="Enter New Address" />
            </Form.Group>
            <Form.Text className="text-muted">
                Old address must be correct!
            </Form.Text>
            <Button variant="primary" type="submit">
                Change Address
            </Button>

            <br></br><br></br><br></br>

        </Form>
    );
} 

export default Settings;
