import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles';

type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes',
    price: 5,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Shoes',
    description: 'Running shoes',
    price: 5,
    image: 'https://picsum.photos/200/300',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
