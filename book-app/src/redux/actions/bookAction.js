import * as types from './actionTypes';

export function getBooksSuccess(books){
    return {type: types.GET_BOOKS_SUCCESS, payload: books}
}

export function getBooks(){
    return function(dispatch){
        let url = "http://localhost:3000/books";
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getBooksSuccess(result)))
    }
}

export function addBookSuccess(book){
    return {type: types.ADD_BOOK_SUCCESS, payload: book}
}

export function addBook(book){
    return function(dispatch){
        let url = "http://localhost:3000/books";
        return fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(book)
        })
            .then(response => response.json())
            .then(result => dispatch(addBookSuccess(result)))
    }
}








