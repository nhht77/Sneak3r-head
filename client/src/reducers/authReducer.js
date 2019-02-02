import { TEST_DISPATCH } from "../actions/types";

const initialState = {
    isAuthenticated: false,
    users: {}
}

export default function(state=initialState, action) {
    switch(action.type){
        case TEST_DISPATCH:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}