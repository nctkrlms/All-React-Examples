import * as actionTypes from './actionTypes';

export function loginUser(user){
    return { type: actionTypes.LOGIN_USER_SUCCESS, payload: user };
}

export function registerUser(user) {
    return { type: actionTypes.REGISTER_USER, payload: user };
}
export function getUsersSuccess(users) {
    return { type: actionTypes.GET_USERS_SUCCESS, payload: users };
}

export function getUsers() {
    return function (dispatch) {
        let url = "http://localhost:3000/users";
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getUsersSuccess(result)));
    };
}
