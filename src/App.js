import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

function App() {
  const [productCollection, setproductCollection] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setproductCollection(data);
  };

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      fetchProducts();
    };
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <Products productCollection={productCollection} />
    </div>
  );
}

export default App;
