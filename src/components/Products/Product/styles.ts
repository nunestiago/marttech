import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root: { maxWidth: '100%' },
  media: { height: '0', paddingTop: '56.25%' },
  cardActions: { display: 'flex', justifyContent: 'flex-end' },
  cardContent: { display: 'flex', justifyContent: 'space-between' },
}));
