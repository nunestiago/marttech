import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import tempPhoto from '../../../assets/wallphoto.jpg';

import useStyles from './styles';

type ProductType = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
};

const Product = ({ product }: ProductType): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions} disableSpacing>
        <IconButton aria-label="add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
