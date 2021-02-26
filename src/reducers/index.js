import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import userReducer from './userReducer';
import customerReducer from './customerReducer';

export default combineReducers({
    simple: simpleReducer,
    clientUser: userReducer,
    customer: customerReducer,

});

