import { GET_PRODUCTS_BY_ARRIVAL, GET_PRODUCTS_BY_SELL } from "../actions/types";

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
        default:
            return state;
    }
}