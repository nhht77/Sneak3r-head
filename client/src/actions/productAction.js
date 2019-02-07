import axios from 'axios';
import { 
    GET_PRODUCTS_BY_ARRIVAL, 
    GET_PRODUCTS_BY_SELL,
 } 
    from "./types";

export const getProductByArrival = () => dispatch => {
    axios.get('/api/products?sortBy=createdAt&order=desc&limit=4')
    .then( res => {
        dispatch({
            type: GET_PRODUCTS_BY_ARRIVAL,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_PRODUCTS_BY_ARRIVAL,
            payload: null
        })
    })
}

export const getProductBySell = () => dispatch => {
    axios.get('/api/products?sortBy=sold&order=desc&limit=4')
    .then( res => {
        dispatch({
            type: GET_PRODUCTS_BY_SELL,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_PRODUCTS_BY_SELL,
            payload: null
        })}
    )
}