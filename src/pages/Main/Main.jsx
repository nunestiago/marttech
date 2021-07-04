import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CardComp } from '../../components/index';
import { useQuery } from 'react-query';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const getProducts = async () =>
  await (await fetch('https://fakestoreapi.com/products')).json();

export default function Main() {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([]);
  const { data, isLoading, error } = useQuery('products', getProducts);

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
    console.log(cartItems);
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Algo deu errado ...</div>;

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth='sm'>
          <Typography
            component='h3'
            variant='h3'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Bem-vindo!
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
          >
            Veja abaixo os itens disponíveis.
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth='md'>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <CardComp item={item} addToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
