import React, { Component } from 'react';

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity : 1
        }
    }
    

    render() {

        var { cartItem } = this.props;

        return (

            <tr>
                <th scope="row">
                    <img src={cartItem.product.image} alt={ cartItem.product.name } className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ cartItem.product.name }</strong>
                    </h5>
                </td>
                <td>{ cartItem.product.price }$</td>
                <td className="center-on-small-only">
                    <span className="qty"> { cartItem.quantity } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label  className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light"
                                onClick = { () => this.onUpdateQuantity(cartItem.product, cartItem.quantity-1) }
                        >
                            <a href="/#">—</a>
                        </label>
                        <label  className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light"
                                onClick = { () => this.onUpdateQuantity(cartItem.product, cartItem.quantity+1) }
                        >
                            <a href="/#">+</a>
                        </label>
                    </div>
                </td>
                <td>{ this.showSubTotal(cartItem.product.price, cartItem.quantity) }$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original-title="Remove item"
                        onClick = { () => this.props.onDeleteProduct(cartItem) }
                    >
                        X
                  </button>
                </td>
            </tr>
        );
    }
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

    onUpdateQuantity = (product, quantity) => {
        if(quantity>0) {
            this.setState({
                quantity: quantity
            })
            this.props.onUpdateQuantity(product, quantity)
        }
    }

}

export default CartItem;