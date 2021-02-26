import { LOAD_RESTURANT_MENU_REQUEST,  LOAD_RESTURANT_MENU_SUCCESS } from './types';


export const loadMenu = (dispatch) => {
    dispatch({type: LOAD_RESTURANT_MENU_REQUEST});
    return fetch('http://localhost:5000/get_menu')
        .then(res => res.json()).then(menuItems => 
        dispatch({
            type: LOAD_RESTURANT_MENU_SUCCESS,
            payload: menuItems
        })
        ).catch(error => {
            const errorMsg = error.message;
            console.log(errorMsg);
        });
}