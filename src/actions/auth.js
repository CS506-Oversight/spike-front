import { SUBMIT_USER, USER_LOGGED_IN, LOGIN_USER_REQUEST} from './types';

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
            dispatch({
                type: USER_LOGGED_IN,
                payload: user
            })
         ).catch(error => {
            const errorMsg = error.message;
            console.log(errorMsg);
         });
}

