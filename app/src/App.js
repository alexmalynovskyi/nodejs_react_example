import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import RevertDigits from './components/RevertDigits';
import Container from './containers/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    margin: '200px 150px',
    minHeight: 250,
    padding: '0 50px'
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        <Card className={classes.card}>
          <RevertDigits />
        </Card>
      </Grid>
    </Container>
  );
}