import * as actionTypes from './actionTypes';

export function totalPrice(cart) {
    return { type: actionTypes.TOTAL_PRICE, payload: cart };
    }