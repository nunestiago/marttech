import React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();

  const [data, setData] = useState({});

  useEffect(() => {
    const storageData = localStorage.getItem('user');

    if (storageData) {
      setData(JSON.parse(storageData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(data));
  }, [data]);

  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    number: '',
    password: '',
    cep: '',
  };

  function onChangeName(event) {
    return (formData.firstName = event.target.value);
  }

  function onChangeLastName(event) {
    return (formData.lastName = event.target.value);
  }

  function onChangeEmail(event) {
    return (formData.email = event.target.value);
  }

  function onChangeAddress(event) {
    return (formData.address = event.target.value);
  }

  function onChangeNumber(event) {
    return (formData.number = event.target.value);
  }

  function onChangePassword(event) {
    return (formData.password = event.target.value);
  }

  function onChangeCep(event) {
    return (formData.cep = event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    setData(formData);
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Registro
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='Nome'
                autoFocus
                onChange={(e) => onChangeName(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidthdata
                id='lastName'
                label='Sobrenome'
                name='lastName'
                autoComplete='lname'
                onChange={(e) => onChangeLastName(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                type='email'
                autoComplete='email'
                onChange={(e) => onChangeEmail(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='address'
                label='Endereço'
                name='address'
                type='address'
                autoComplete='address'
                onChange={(e) => onChangeAddress(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='number'
                variant='outlined'
                required
                fullWidth
                id='addressNumber'
                label='Número'
                onChange={(e) => onChangeNumber(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='cep'
                label='CEP'
                name='cep'
                autoComplete='cep'
                onChange={(e) => onChangeCep(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Senha'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => onChangePassword(e)}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={(e) => onSubmit(e)}
          >
            Registrar
          </Button>
          {console.log(data)}
          <Grid container justify='flex-end'>
            <Grid item>
              <Link component={RLink} to='Login' variant='body2'>
                Já tem uma conta? Entre aqui!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
