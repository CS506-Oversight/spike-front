import { LOAD_RESTURANT_MENU_REQUEST,  LOAD_RESTURANT_MENU_SUCCESS } from './types';
import axios from 'axios';

export const loadMenu = () => async dispatch  => {
    try {
        const res = await axios.get('http://localhost:5000/get_menu')
        dispatch({
            type: LOAD_RESTURANT_MENU_SUCCESS,
            payload: res.data
        })
    }catch(error){
        const errorMsg = error.message;
        console.log(errorMsg)
    }
    
}