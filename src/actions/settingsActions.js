import axios from 'axios';
import {UPDATE_USER, CREATE_USER } from './types';

export const createUser = newUserData => dispatch => {
    console.log('creat user...' + newUserData);
    let username = newUserData.username;
    let email = newUserData.email;
    let password = newUserData.password;
    let phone = newUserData.phone;
    let address = newUserData.address;
    let type = newUserData.type;
    let newData = {
        username: username,
        email: email,
        password: password,
        phone: phone,
        address: address,
        type: type,
    }
    const config = {
        headers: {
            "Content-type": "application/json"
        }

    }
    const body = JSON.stringify(newData);
    axios.post('http://localhost:5000/create_user', body, config)
        .then(res => res).then(user => {
            dispatch({
                type: CREATE_USER,
                payload: user
            })
            console.log(user);
        }).catch(error => {
            const errorMsg = error.message;
            console.log(errorMsg);
        })

}
export const updateUser = userData => dispatch => {
    console.log('updating user...' + userData);
    let username = userData.username;
    let password = userData.password;
    let phone = userData.phone;
    let address = userData.address;
    let currentUsername = userData.currentUsername;
    let udata = {
        username: username,
        password: password,
        phone: phone,
        address: address,
    }
    fetch('http://localhost:5000/update_user/' + currentUsername, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(udata)
    }).then(res=> res.json()).then(user => 
                dispatch({
                    type: UPDATE_USER,
                    payload: user
                })
         ).catch(error => {
            const errorMsg = error.message;
            console.log(errorMsg);
        });
    
}