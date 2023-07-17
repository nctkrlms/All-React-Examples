import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function loginUserReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCCESS:
            var checkUser = state.users.filter(c => c.password === action.payload.password && c.email === action.payload.email);
            if (checkUser.length > 0) {
                state.currentUser = checkUser[0];
                return state.currentUser;
            }
            else {
                return state;
            }
        default:
            return state;
    }
}