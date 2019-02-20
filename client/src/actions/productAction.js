import axios from 'axios';
import { 
    GET_PRODUCTS_BY_ARRIVAL, 
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCT_BRANDS,
    GET_PRODUCT_CONDITIONS
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

export const getProductBrand = () => dispatch => {
    axios.get('/api/products')
         .then( res => {
            dispatch({
                type:GET_PRODUCT_BRANDS,
                payload: res.data
            })
         })
         .catch(
             dispatch({
                type:GET_PRODUCT_BRANDS,
                payload: null
            })
         )
}

export const getProductCondition = () => dispatch => {
    axios.get('/api/conditions')
         .then( res => {
            dispatch({
                type:GET_PRODUCT_CONDITIONS,
                payload: res.data
            }) 
        })
         .catch(
            dispatch({
                type:GET_PRODUCT_CONDITIONS,
                payload: null
            })
         )
}