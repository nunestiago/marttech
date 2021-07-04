import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' sticky>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
          >
            E-commerce
          </Typography>
          <Button component={Link} to='/' color='inherit'>
            Home
          </Button>
          <Button component={Link} to='Login' color='inherit'>
            Login
          </Button>
          <Button component={Link} to='Register' color='inherit'>
            Register
          </Button>
          <Button component={Link} to='Cart' color='inherit'>
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
