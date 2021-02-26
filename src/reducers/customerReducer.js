import { LOAD_RESTURANT_MENU_REQUEST, LOAD_RESTURANT_MENU_SUCCESS } from '../actions/types';

const initalState = {
    menuItems: {}
}
export default function customerReducer(state = initalState, action){
    switch(action.type){
        case LOAD_RESTURANT_MENU_REQUEST:
            return {
                ...state,
                isloading: true
            };
        case LOAD_RESTURANT_MENU_SUCCESS:
            return {
                ...state,
                isloading: false,
                menuItems: action.payload
            };
        default:
            return state;
    }
} 