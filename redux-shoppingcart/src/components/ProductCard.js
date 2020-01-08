import React from 'react';
import ProductInfo from './ProductInfo';


const ProductCard = ({ product, onClickAddToCart }) => (
    <div>
        <ProductInfo title={product.title} price={product.price} quantity={product.inventory}/>
        <button onClick={onClickAddToCart} disabled={product.inventory > 0 ? '' : 'disabled'}>{product.inventory > 0 ? 'Add to Cart' : 'Sold Out'}</button>
    </div>

)

export default ProductCard;