import React, { Component } from 'react';
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
    flexGrow: 1,
  },
}

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange = e => {
    this.props.onChange(e.target.value);
  };
  onSubmit = e => {
    this.props.onSubmit(e.target.value);
  };

  render() {
    return (
      <div>
        <Paper
          style={styles.Paper}
        >
          <InputBase
            style={styles.InputBase}
            placeholder="Movie Search App"
            inputProps={{ 'aria-label': 'Movie Search App' }}
            onChange={this.onTextChange}

            onSubmit={this.onSubmit}
          />
          <IconButton
            aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    );
  }

}
