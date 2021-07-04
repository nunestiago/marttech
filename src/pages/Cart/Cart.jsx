import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CartItem } from '../../components';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Cart({ cartItems, addToCart, removeFromCart }) {
  const classes = useStyles();
  let storedCart = JSON.parse(window.localStorage.getItem('cartItems'));
  useEffect(() => {
    storedCart = JSON.parse(window.localStorage.getItem('cartItems'));
    return () => {
      window.localStorage.setItem('cartItems', JSON.stringify(storedCart));
    };
  }, []);
  console.log(cartItems);

  const calculateTotal = () => {
    return storedCart.reduce((acc, item) => console.log(item), 0);
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
