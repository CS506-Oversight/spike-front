import { LOAD_RESTURANT_MENU_REQUEST, LOAD_RESTURANT_MENU_SUCCESS } from '../actions/types';

const initalState = {
    isloading: true,
    menuItems: {}
}
function sortMenuEntrees(menuItems){
    let sortedMenu = menuItems.menu.sort(function(a,b){
        var typeA = a.type.toUpperCase();
        var typeB = b.type.toUpperCase();
        if(typeA < typeB){
            return 1;
        }
        if(typeA > typeB ){
            return -1;
        }
        return 0;
    })
    console.log(sortedMenu)
    return sortedMenu;
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
                menuItems: {
                    menu: sortMenuEntrees(action.payload),
                }
            };
        default:
            return state;
    }
} 