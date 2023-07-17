import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function registerUser(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER_USER:
            var checkUser = state.users.some(c => c.email === action.payload.email);
            if (checkUser) {

                return state;
            }
            else {
                state.users.push(action.payload);
                return state;
            }
        default:
            return state;
    }
}