import React from 'react';

const ProductCard = ({title, price, inventory}) => (
    <div>
        {console.log(title)}
        <h4>{title}</h4>
        <p>£{price}</p>
        <p>stock: {inventory}</p>
    </div>
)

export default ProductCard;