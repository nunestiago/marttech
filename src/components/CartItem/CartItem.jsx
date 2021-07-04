import React from 'react';
import { Container, Button } from '@material-ui/core';

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <Container>
      <div>
        <h3>{item.title}</h3>
        <div className='information'>
          <p>Preço: ${item.price}</p>
          <p>SubTotal: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className='buttons'>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CartItem;
