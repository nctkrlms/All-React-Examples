import * as types from './actionTypes';

export function getFavoritesSuccess(favorites){
    return {type: types.GET_FAVORITES_SUCCESS, payload: favorites}
}

export function getFavorites(){
    return function(dispatch){
        let url = "http://localhost:3000/favorites";
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getFavoritesSuccess(result)))
    }
}

export function addToFavoriteSuccess(favorite){
    return {type: types.ADD_TO_FAVORITE_SUCCESS, payload: favorite}
}

export function addToFavorite(favorite){
    return function(dispatch){
        let url = "http://localhost:3000/favorites";
        return fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(favorite)
        })
            .then(response => response.json())
            .then(result => dispatch(addToFavoriteSuccess(result)))
    }
}

export function removeFromFavoriteSuccess(favorite){
    return {type: types.REMOVE_FROM_FAVORITE_SUCCESS, payload: favorite}
}

export function removeFromFavorite(favorite){
    return function(dispatch){
        let url = "http://localhost:3000/favorites/"+favorite.id;
        return fetch(url, {
            method: "DELETE",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(favorite)
        })
            .then(response => response.json())
            .then(result => dispatch(removeFromFavoriteSuccess(result)))
    }
}
