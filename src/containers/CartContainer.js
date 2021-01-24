import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import * as actions from './../actions/index';
import PropTypes from 'prop-types';

class CartContainer extends Component {
    render() {
        var { cart} = this.props;
        return (
            <React.Fragment>
                <Cart> 
                    { this.showCartItem(cart) }
                    { this.showTotalPrice(cart) }
                </Cart>
            </React.Fragment>
        )
    }
    showCartItem = (cart) => {
        var { onUpdateQuantity, onDeleteProduct } = this.props;
        var result =    <tr>
                            <td>{ Message.CART_EMPTY }</td>
                        </tr> ;
        if(cart.length > 0) {
            result = cart.map((cartItem, index)=> {
                return  (<CartItem
                            key = { index }
                            cartItem = { cartItem }
                            index = { index }
                            onUpdateQuantity = { onUpdateQuantity }
                            onDeleteProduct = { onDeleteProduct }
                        >
                        </CartItem>)
            })
        }
        return result;
    }
    showTotalPrice = (cart) => {
        var result = null;
        if(cart.length > 0) {
            var total = 0;
            for(var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
            result = <CartResult cart = { total } />
        }
        return result;
    }
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct : (product) => {
            dispatch(actions.actDeleteProduct(product))
        },
        onUpdateQuantity : (product, quantity) => {
            dispatch(actions.actUpdateQuantity(product, quantity))
        }
    }
}


CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);