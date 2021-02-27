import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./reducers";


export default function configureStore(initialState = {}){
    const store = createStore(rootReducer, compose(applyMiddleware( thunkMiddleware ), composeWithDevTools()));

    return store;
}
