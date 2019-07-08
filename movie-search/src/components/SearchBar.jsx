import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  Paper: {

  },
  InputBase: {
    width: "92%",
    padding: '5px',
    margin: 'auto',

  },
}

export default function SearchBar() {
  return (
    <div>
      <Paper
        style={styles.Paper}
      >
        <IconButton
          aria-label="Search">
          <SearchIcon />
        </IconButton>
        <InputBase
          style={styles.InputBase}
          placeholder="Movie Search App"
          inputProps={{ 'aria-label': 'Movie Search App' }}
        />

      </Paper>
    </div>
  );
}
