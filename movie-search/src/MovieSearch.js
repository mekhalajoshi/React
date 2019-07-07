import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResultDisplay from "./SearchResultDisplay";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      searchTerm: "Harry"
    };
    this.state = this.initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = text => {
    this.setState({
      searchTerm: text
    });
  };

  render() {
    return (
      <div>
        <SearchBar onChange={this.handleSubmit} />
        <SearchResultDisplay searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default MovieSearch;
