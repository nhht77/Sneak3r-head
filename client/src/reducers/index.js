import {combineReducers} from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import brandReducer from './brandReducer';
import conditionReducer from './conditionReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    product: productReducer,
    brand: brandReducer,
    condition: conditionReducer
});