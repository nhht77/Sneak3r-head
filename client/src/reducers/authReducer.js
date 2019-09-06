import { TEST_DISPATCH, SET_CURRENT_USER, ADD_PRODUCT_TO_CART } from "../actions/types";
import isEmpty from '../utils/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state=initialState, action) {
    switch(action.type){
        case TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
      case ADD_PRODUCT_TO_CART:
        return {
          ...state
        }
        default:
            return state;
    }
}