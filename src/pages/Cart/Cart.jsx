import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
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

function Cart({ cartItems, addToCart, removeFromCart, setCartItems }) {
  const classes = useStyles();
  const storedCart = JSON.parse(window.localStorage.getItem('cartItems'));

  const calculateTotal = (items) => {
    // items.reduce((ack, item) => ack + item.amount * item.price, 0);
    console.log(items);
    return '0';
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
      <h2>Total: ${calculateTotal(storedCart)}</h2>
    </Container>
  );
}

export default Cart;
