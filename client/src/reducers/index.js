import {combineReducers} from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    product: productReducer
});