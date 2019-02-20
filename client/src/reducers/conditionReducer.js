import { GET_PRODUCT_CONDITIONS } from "../actions/types";

const initState = {};

export default function(state=initState, action) {
    switch (action.type) {
        case GET_PRODUCT_CONDITIONS:
            return action.payload            
        default:
            return state;
    }
}