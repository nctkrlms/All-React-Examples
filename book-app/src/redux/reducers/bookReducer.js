import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function bookReducer(state = initialState.books, action){
    switch (action.type) {
        case types.GET_BOOKS_SUCCESS:
            return action.payload;
        case types.ADD_BOOK_SUCCESS:
            return [...state, {...action.payload}];
        default:
            return state;
    }
}


