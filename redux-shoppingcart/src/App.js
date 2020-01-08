import React from 'react';

import Header from './components/Header'
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';

function App() {
  return (
   <main>
     <Header />
     <ProductContainer />
     <CartContainer />
   </main>
  );
}

export default App;
