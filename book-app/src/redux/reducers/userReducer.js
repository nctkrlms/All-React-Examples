import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
    switch (action.type) {
        case actionTypes.GET_USERS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}







