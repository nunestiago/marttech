import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles';

// const products = [
//   {
//     id: 1,
//     name: 'Shoes',
//     description: 'Running shoes',
//     price: 5,
//     image: 'https://picsum.photos/200/300',
//   },
//   {
//     id: 2,
//     name: 'Shoes',
//     description: 'Running shoes',
//     price: 5,
//     image: 'https://picsum.photos/200/300',
//   },
// ];
interface ProductType {
  id: string;
  name: string;
  description: string;
  price: { formatted_with_symbol: number };
  media: { source: string };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Products = ({ products }: any) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product: ProductType) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
