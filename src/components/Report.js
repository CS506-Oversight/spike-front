import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown"

function Report() {

    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Print Reports</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <p>Sort and print your reports here</p>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Day</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Week</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Month</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Year</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Food Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Modal.Body>
        
            <Modal.Footer>
                <Button variant="primary">Print</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
} 

export default Report;


