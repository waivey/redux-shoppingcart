import React from 'react';
import ProductInfo from './ProductInfo';


const Cart = ({ products, total, onClickCheckOut }) => {
    
    const hasProducts = products.length > 0;
    const productsList = hasProducts ? (
        products.map(product => 
            <ProductInfo key={product.id} title={product.title} price={product.price} quantity={product.quantity}/>)) : (
                <em>Please add some items to your cart</em>
            )
    


    return (
        <div>
            <h3>Your Cart</h3>
            <div>{productsList}</div>
            <p>Total: £{total}</p>
            <button onClick={onClickCheckOut} disabled={hasProducts ? '' : 'disabled'}>Checkout</button>
        </div>
    )
}

export default Cart;