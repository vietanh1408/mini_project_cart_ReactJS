import * as messages from './../constants/Message';
import * as types from './../constants/ActionTypes';

var initialState = messages.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            state = messages.BY_PRODUCT_SUCCESS;
            return state;
        case types.DELETE_PRODUCT:
            state = messages.MSG_DELETE_PRODUCT_SUCCESS;   
            return state;
        case types.UPDATE_QUANTITY:
            state = messages.MSG_UPDATE_CART_SUCCESS;
            return state;

        default:
            return state;
    }

}
    

export default message;