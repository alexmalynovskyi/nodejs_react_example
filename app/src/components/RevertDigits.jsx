import React, { useState, Profiler, useMemo, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import List from '../containers/List';

import { getRevertedNumber } from '../utils/apiCalls';

const useStyles = makeStyles({
  grid: {
    margin: '25px 12px'
  }
});

const initialState = [];

const reducer = (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case 'add':
      return state.concat(payload);
    case 'remove':
      return state.filter((value, index) => index !== payload);
  }
}

const RevertDigits = () => {
  const classes = useStyles();
  const [number, setNumber] = useState(0);
  const [revertedNumbers, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    const { value } = event.target;
    console.log('handleChange');
    setNumber(value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const value = await getRevertedNumber(number);
    dispatch({
      type: 'add',
      payload: {
        number,
        reverted: value
      }
    });
  }

  const handleListItemRemove = (index) => {
    dispatch({
       type: 'remove',
       payload: index
    });
  };

  console.log('DO RENDER');
  return (
    <>
       <Grid className={classes.grid} container justify="center">
          <TextField
            required name='number'
            id="standard-required"
            onChange={handleChange}
            label="Required"
            type="number"
            value={number}
          />
      </Grid>
      <Grid className={classes.grid} container justify="center">
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
            Revert Number
        </Button>
   </Grid>
      <Grid container justify="center">
        <List
          listNumbers={revertedNumbers}
          handleListItemRemove={handleListItemRemove}
        />
      </Grid>
    </>
  )
}

export default React.memo(RevertDigits, () => false);