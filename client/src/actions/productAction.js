import axios from 'axios';
import { 
    GET_PRODUCTS_BY_ARRIVAL, 
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCT_BRANDS,
    GET_PRODUCT_CONDITIONS,
    GET_PRODUCT_TO_SHOP,
    GET_PRODUCT_BY_ID,
    GET_ERRORS
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
    axios.get('/api/brands')
         .then( res => {
             dispatch({
                 type: GET_PRODUCT_BRANDS,
                 payload:res.data
             })
         })
         .catch( err => {
             dispatch({
                type: GET_PRODUCT_BRANDS,
                payload:null
             })
         })
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

export const getProductToShop = (skip, limit, filters, prevState=[]) => dispatch => {
    axios.post('/api/products/shop', {skip, limit, filters})
         .then(res => {
            let newState = [ ...prevState, ...res.data.products]
            let payload  = {size: res.data.size, products: newState}
             dispatch({
                 type:GET_PRODUCT_TO_SHOP,
                 payload
             })
         })
         .catch( err => {
            dispatch({
                type:GET_PRODUCT_TO_SHOP,
                payload:null
            })
        })
}

export const getProductById = id => dispatch => {
    axios.get(`/api/products/${id}`)
         .then( res => {
             dispatch({
                 type:GET_PRODUCT_BY_ID,
                 payload: res.data[0]
             })
         })
}

export const addProduct = (productData, history) => dispatch => {
    axios
      .post('/api/products', productData)
      .then(res => history.push('/'))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };