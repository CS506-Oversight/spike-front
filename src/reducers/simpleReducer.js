import { SIMPLE_ACTION } from '../actions/types';


function simpleReducer(state = {}, action) {
    switch (action.type) {
        case SIMPLE_ACTION:
            console.log('reducer logged');
            return {
                result: action.payload
            }
        default:
            return state
    }
}

export default simpleReducer;