import { 
    GET_PRODUCTS_BY_ARRIVAL, 
    GET_PRODUCTS_BY_SELL, 
    GET_PRODUCT_TO_SHOP,
    GET_PRODUCT_BY_ID } from "../actions/types";

const initialState = {};

export default function(state=initialState, action){
    switch (action.type) {
        case GET_PRODUCTS_BY_ARRIVAL:
            return {
                ...state,
                byArrival: action.payload,
            }
        case GET_PRODUCTS_BY_SELL:
            return {
                ...state,
                bySell: action.payload,
            }
        case GET_PRODUCT_TO_SHOP:
            return {
                ...state,
                byShop: action.payload.products,
                bySize: action.payload.size
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                byId: action.payload
            }
        default:
            return state;
    }
}