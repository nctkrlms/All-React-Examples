
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";




export default function priceReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOTAL_PRICE:
            var total = 0;
            state.cart.map((cartItem) => (
                total += cartItem.product.unitPrice * cartItem.quantity
            ))
            return total;
        default:
            return state.totalPrice;
    }
}