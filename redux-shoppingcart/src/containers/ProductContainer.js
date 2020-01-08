// will be sending products into cart state

import React from 'react'
import ProductList from '../components/ProductList'
import ProductCard from '../components/ProductCard'
import { connect } from 'react-redux';
import { getVisibleProducts } from '../reducers/products'

const ProductContainer = ({ products }) => (
    <ProductList>
        {products.map(product =>  <ProductCard key={product.id} {...product}/>)}
    </ProductList>
)

const mapStateToProps = state => ({
    products: getVisibleProducts(state)
})

export default connect(mapStateToProps)(ProductContainer);