import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <div className='container'>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/'>
            <Products
              productCollection={productCollection}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path='/cart'>
            <Cart cart={cart}></Cart>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
