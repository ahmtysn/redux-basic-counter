import counterReducer from './counter';
import loggedReducer from "./isLoggedIn";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers;

// add a comment