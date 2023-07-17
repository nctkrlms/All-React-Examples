import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function categoryReducer(state = initialState.categories, action) {
    switch (action.type) {
        case types.GET_CATEGORIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}