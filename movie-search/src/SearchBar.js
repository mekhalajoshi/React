import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div style={useStyles}>
        <Box mx="auto" m={1} p={1}>
          <Paper className="root">
            <IconButton className="iconButton" aria-label="Search">
              <SearchIcon />
            </IconButton>
            <InputBase
              style={{ width: "95%" }}
              className="input"
              placeholder="Search Movie"
              onChange={this.onTextChange}
            />
          </Paper>
        </Box>
      </div>
    );
  }
}

export default SearchBar;
