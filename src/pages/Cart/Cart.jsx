import React, { useEffect } from 'react';

import Container from '@material-ui/core/Container';
import { CartItem } from '../../components';

function Cart({ cartItems, addToCart, removeFromCart }) {
  let storedCart = JSON.parse(window.localStorage.getItem('cartItems'));
  useEffect(() => {
    storedCart = JSON.parse(window.localStorage.getItem('cartItems'));
  }, []);
  console.log(cartItems);

  const calculateTotal = () => {
    return storedCart.reduce((acc, item) => acc + item.amount * item.price, 0);
  };

  return (
    <Container>
      <h2>Your Shopping Cart</h2>

      {storedCart.length === 0 ? <p>No items in cart.</p> : null}
      {storedCart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal()}</h2>
    </Container>
  );
}

export default Cart;
