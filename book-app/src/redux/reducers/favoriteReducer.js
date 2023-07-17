import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function favoriteReducer(state = initialState.favorites, action) {
    switch (action.type) {
        case actionTypes.GET_FAVORITES_SUCCESS:
            return action.payload;
        case actionTypes.ADD_TO_FAVORITE_SUCCESS:
            return [...state, {...action.payload}];
        
        case actionTypes.REMOVE_FROM_FAVORITE_SUCCESS:
            const newState = state.filter(favorite => favorite.id !== action.payload.id);
            return newState;
            
        default:
            return state;
    }
}
