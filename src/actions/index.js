import * as types from './../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteProduct = (cartItem) => {
    return {
        type: types.DELETE_PRODUCT,
        cartItem
    }
}

export const actUpdateQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY,
        product,
        quantity
    }
}