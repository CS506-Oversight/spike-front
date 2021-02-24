import { SUBMIT_USER } from './types';

export const submitUser = userData => dispatch => {
    console.log('logging in user...' + userData);
    let username = userData.username;
    let password = userData.password;
    let data = {
        username: username,
        password: password,
    }
    fetch('http://localhost:5000/check_pass', {       
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(user =>
            console.log(user)
         );
}