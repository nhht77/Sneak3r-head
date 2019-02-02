import {TEST_DISPATCH} from './types';
import {GET_ERRORS} from './types';

import axios from 'axios';

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
        console.log(res.data)
    })
    .catch(err => dispatch({
        type:GET_ERRORS,
        payload: err.response.data
    }))
}