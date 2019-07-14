import React, { Component } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
};
export default class Search extends Component {
  render() {
    return (
      <div>
        Search

        <Paper style={useStyles.root} >
          <IconButton style={useStyles.iconButton} aria-label="Menu">
          </IconButton>
          <InputBase
            style={useStyles.input}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'Search Google Maps' }}
          />
          <IconButton style={useStyles.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    );
  }
}
