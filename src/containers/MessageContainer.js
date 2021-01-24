import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import Message from './../components/Message';
import PropTypes from 'prop-types';

class MessageContainer extends Component {
    render() {

        var { message } = this.props;

        return (
            <Message
                message = { message }
            />
        )
    }
}


const mapStateToProps = (state) => {
    return{
        message: state.message
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1))
        }
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}



export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);