import {UPDATE_USER} from './types';

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