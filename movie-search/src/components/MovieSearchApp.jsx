import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieCardGrid from './MovieCardGrid';
import { getMoviesByTitle } from '../api/getOmdbData.js';


export default class MovieSearchApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: 'move'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = text => {
        this.setState({
            searchTerm: text
        });
    };
    handleSubmit = text => {
        getMoviesByTitle(text)
    };
    render() {
        return (
            <div>
                <Header />
                <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} />
                <MovieCardGrid searchTerm={this.state.searchTerm} />
            </div>
        );
    }

}
