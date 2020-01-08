// this is acting like a server to force async

import products from './products.json'

const TIMEOUT = 100

export default {
    getProducts: (callback, timeout) => setTimeout(() => callback(products), timeout || TIMEOUT),
    buyProducts: (payload, callback, timeout) => setTimeout(()=> callback(), timeout || TIMEOUT)
}