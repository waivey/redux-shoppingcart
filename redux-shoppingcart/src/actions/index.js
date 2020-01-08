import { RECEIVE_PRODUCTS } from './ActionTypes';
import shop from '../api/shop'

const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}
