import { SUBMIT_USER, USER_LOGGED_IN } from '../actions/types';

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
        default:
            return state;
    }
}

export default userReducer;