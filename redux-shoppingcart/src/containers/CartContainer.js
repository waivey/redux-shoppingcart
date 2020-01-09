// will connecting to redux to get the products in cart

import React from 'react';
import Cart from '../components/Cart';
import { connect } from 'react-redux'
import { getCartProducts, getTotal } from '../reducers';
import { checkout } from '../actions/index';

const CartContainer = ({ products, total }) => (

    <>
    
    <Cart products={products} total={total}/>
    </>
)

const mapStateToProps = state => (console.log(getTotal(state), '<<< in mapStateToProps in CartContainer'), {
    products: getCartProducts(state),
    total: getTotal(state)
})



export default connect(mapStateToProps)(CartContainer);