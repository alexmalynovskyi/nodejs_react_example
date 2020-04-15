import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      {props.children}
    </Grid>
  );
}