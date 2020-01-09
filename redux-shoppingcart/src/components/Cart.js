import React from 'react';
import ProductInfo from './ProductInfo';


const Cart = ({ products, total }) => {
    console.log(total, '<<< in Cart')
    const hasProducts = products !== undefined
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
        </div>
    )
}

export default Cart;