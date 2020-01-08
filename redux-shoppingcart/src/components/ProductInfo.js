import React from 'react';

const ProductInfo = ({title, price, quantity}) => (
    <div>
        
        <h4>{title}</h4>
        <p>£{price} X {quantity}</p>
        
    </div>
)

export default ProductInfo;
