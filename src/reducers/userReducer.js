import { USER_LOGGED_IN, UPDATE_USER, CREATE_USER } from '../actions/types';

const initialState = {
    currentUser: {
        isLoggedIn: false,
        user: {}
    }
}

function userReducer (state = initialState, action){
    switch(action.type){
        case USER_LOGGED_IN:
            return {
                ...state,
                currentUser: {
                    isLoggedIn: true,
                    user: action.payload
                }   
            };
        case UPDATE_USER:
            return{
                ...state,
                currentUser: {
                    isLoggedIn: true,
                    user: action.payload
                }
            }
        case CREATE_USER:
            return{
                ...state,
                currentUser: {
                    isLoggedIn: true,
                    user: action.payload
                }
            }
        default:
            return state;
    }
}

export default userReducer;