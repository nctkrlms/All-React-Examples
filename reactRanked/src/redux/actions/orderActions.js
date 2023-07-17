import * as types from './actionTypes';

export function addToOrder(order){
    return {type: types.ADD_TO_ORDER, payload: order}
}

