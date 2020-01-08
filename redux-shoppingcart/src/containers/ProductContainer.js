

import React from 'react'
import ProductList from '../components/ProductList'
import ProductCard from '../components/ProductCard'
import { connect } from 'react-redux';
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/index'

const ProductContainer = ({ products, addToCart }) => (
    <ProductList>
        {products.map(product =>  
            <ProductCard key={product.id} product={product} onClickAddToCart={() => addToCart(product.id)}/>) }
    </ProductList>
)

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(mapStateToProps, { addToCart })(ProductContainer);