import * as types from './actionTypes';

export function getUsersSuccess(users){
    return {type: types.GET_USERS_SUCCESS, payload: users}
}

export function getUsers(){
    return function(dispatch){
        let url = "http://localhost:3000/users";
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getUsersSuccess(result)))
    }
}

export function registerUserSuccess(user){
    return {type: types.REGISTER_USER_SUCCESS, payload: user}
}

export function registerUser(user){
    return function(dispatch){
        let url = "http://localhost:3000/users";
        return fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(result => dispatch(registerUserSuccess(result)))
    }
}

export function loginUser(user){
    return {type: types.LOGIN_USER, payload: user}
}

