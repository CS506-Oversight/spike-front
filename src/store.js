import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./reducers";

export default function configureStore(initialState = {}){
    const initalState = {

    }
    const store = createStore(rootReducer, initalState, compose(applyMiddleware( thunkMiddleware ), composeWithDevTools()));

    return store;
}



// initialState,
// compose(
//     ,
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// )