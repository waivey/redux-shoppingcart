// will connecting to redux to get the products in cart

import React from 'react';
import Cart from '../components/Cart';
import { connect } from 'react-redux'
import { getCartProducts, getTotal } from '../reducers';
import { checkout } from '../actions/index';

const CartContainer = ({ products, total, checkout }) => (

    <>
    <Cart products={products} total={total} onClickCheckOut={() => checkout(products)}/>
    </>
)

const mapStateToProps = state => ({
    products: getCartProducts(state),
    total: getTotal(state)
})



export default connect(mapStateToProps, { checkout })(CartContainer);