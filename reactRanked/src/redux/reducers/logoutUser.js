import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function logoutUser(state = initialState, action) {
    switch (action.type) {
        case types.LOGOUT_USER:
            let user = {
                id: 0,
                name: "",
                password: "",
                email: "",
                role: "",
                address: "",
            };
            state.currentUser = user;
            return state;
        default:
            return state;
    }
}