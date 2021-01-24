import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products products = { products }>

                {this.showProducts(products)}
            </Products>
        )
    }
    showProducts = (products) => {
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return  <Product
                            key = { index }
                            product = { product }
                        >
                            { () => this.onAddToCart(product) }
                        </Product>
            })
        }
        return result;
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product)
    }
}


const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1))
        }
    }
}


ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);