import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { display } from '@material-ui/system';

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 0,
    '& > li': {
      margin: '5px 0',
      padding: '0 12px',
      display: 'flex',
      justifyContent: 'space-around',
      '& p, button': {
        flex: 1
      }
    }
  },
});

const List = ({ listNumbers, handleListItemRemove }) => {
  const classes = useStyles();

  const renderListNumbers = () => {
      return listNumbers.map((item, key) => (
          <li>
            <p>{item.reverted}</p>
            <Button variant="contained" onClick={() => handleListItemRemove(key)} color="secondary">
              remove
            </Button>
          </li>
      ));
  }

  return (
    <ul className={classes.ul}>
      {listNumbers && listNumbers.length > 0 ? renderListNumbers() : null }
    </ul>
    )
}

export default List;