import { SUBMIT_USER, USER_LOGGED_IN, LOGIN_USER_REQUEST} from './types';

import axios from 'axios';

export const submitUser= userData => (dispatch, getState) => {
    
    console.log('logging in user...' + userData.username);
    let username = userData.username;
    let password = userData.password;
    //const token = getState().currentUser.token;

    // if(token) {

    // }
    let data = {
        username: username,
        password: password,
    }
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const body = JSON.stringify(data) 
    axios.post('http://localhost:5000/check_pass', body, config)
        .then(res => res).then(user => {
            dispatch({
                type: USER_LOGGED_IN,
                payload: user
            })
            localStorage.setItem("token", user.jwt);
            console.log(user.type);
        }).catch(error => {
            const errorMsg = error.message;
            console.log(errorMsg);
        })
}

