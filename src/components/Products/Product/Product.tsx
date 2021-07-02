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

const Product = ({ product }): JSX.Element => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
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
