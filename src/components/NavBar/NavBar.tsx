import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import tempPhoto from '../../../assets/wallphoto.jpg';

import function NavBar() {
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={tempPhoto} alt="MartTech commerce" height="25px" />
            MartTech Shop
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
