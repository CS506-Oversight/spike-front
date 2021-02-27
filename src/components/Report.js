import React, { Component,useState } from 'react';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown"
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import Row from "react-bootstrap/Row";
//Actions
import { donwloadReports } from '../actions/reportAction'

export default function Report() {


    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(donwloadReports());
        console.log("here")
    }



        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Print Reports</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Download your reports here</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button href="http://localhost:5000/show_report">Download Usage Reports</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }

