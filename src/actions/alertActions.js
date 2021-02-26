import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './types';

export const alertActions = {
    success,
    error,
    clear
};

function success(message){
    return {
        type: ALERT_SUCCESS,
        message: message
    }
}

function error(message){
    return {
        type: ALERT_ERROR,
        message: message
    }
}

function clear(message){
    return {
        type: ALERT_CLEAR,
    }
}