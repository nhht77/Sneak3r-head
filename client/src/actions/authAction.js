import {TEST_DISPATCH, GET_ERRORS, SET_CURRENT_USER, ADD_PRODUCT_TO_CART} from './types';

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

export const testRegisterUser = userData => {
    return {
        type:TEST_DISPATCH,
        payload: userData
    }
}

export const registerUser = (userData, history) => dispatch => {
        axios.post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        }));
}

export const loginUser = userData => dispatch => {
    axios.post('api/users/login', userData)
    .then( res => {
        const { token } = res.data;
        // Set Token to Local Storage
        localStorage.setItem('jwtToken', token);
        // Set Token to Auth Header
        setAuthToken(token);
        // Decode Token
        const decoded = jwt_decode(token);
        // Set Current User
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
        type:GET_ERRORS,
        payload: err.response.data
    }))
}

export const setCurrentUser = decoded => {
    return {
        type:SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};

export const addProductToCart = (user_id, product) => dispatch => {
    console.log(user_id);
    console.log(product);
    axios.post()
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: {product}
    })
}