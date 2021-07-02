import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Typography,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Product = (): JSX.Element => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom></Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
