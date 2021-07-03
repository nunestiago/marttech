import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';

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

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    return () => {
      fetchCart();
      fetchProducts();
    };
  }, []);

  return (
    <div className='container'>
      <Navbar totalItems={cart.total_items} />
      {/* <Products
        productCollection={productCollection}
        onAddToCart={handleAddToCart}
      /> */}
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default App;
