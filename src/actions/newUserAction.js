// import {CREATE_USER} from './types';

// export const createUser = userData => dispatch => {
//     console.log('creating new user...' + userData);
//     let username = userData.username;
//     let password = userData.password;
//     let phone = userData.phone;
//     let address = userData.address;
//     let data = {
//         username: username,
//         password: password,
//         phone: phone,
//         address: address,
//     }
//     fetch('http://localhost:5000/create_user/'{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(res=> res.json()).then(user => 
//                 dispatch({
//                     type: CREATE_USER,
//                     payload: user
//                 })
//          ).catch(error => {
//             const errorMsg = error.message;
//             console.log(errorMsg);
//         });
// }