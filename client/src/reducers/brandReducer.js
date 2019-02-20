import { GET_PRODUCT_BRANDS } from "../actions/types";

const initState = {};

export default function(state=initState, action) {
    switch (action.type) {
        case GET_PRODUCT_BRANDS:
            return action.payload
        default:
            return state;
    }
}