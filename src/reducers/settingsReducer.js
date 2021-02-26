import {UPDATE_USER} from '../actions/types';

const initialState = {
    currUser: {
        isCorrectUser: false,
        user: {}
    }
}

function settingsReducer (state = initialState, action){
    switch(action.type){
        case CHANGE_ALL:
            return{
                ...state,
                currUser: {
                    isCorrectUser: true,
                    user: action.payload
                }
            }
    
    }

}

export default settingsReducer;