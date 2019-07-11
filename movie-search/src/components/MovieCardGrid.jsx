import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { Grid } from '@material-ui/core';
import { getMoviesByTitle } from '../api/getOmdbData.js';

const styles = {
  GridContainer: {
    padding: '20px',
    margin: 'auto',
  },
}

export default class MovieCardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount(props) {
    let m = await getMoviesByTitle(this.props.searchTerm)
    this.setState({
      movies: m
    });
    console.log(this.state.movies)
  }

  async getData(searchTerm) {
    let m = [];
    m = await getMoviesByTitle(searchTerm);
    console.log(m)
    return m;

  }

  render() {
    return (
      <div>
        <Grid
          container
          spacing={3}
          style={styles.GridContainer}
        >
          <Grid item xs={12}>
            {this.props.searchTerm}
          </Grid>

          {this.state.movies.map(movie => {
            return (
              <Grid item style={{ marginBottom: '10px' }} >
                <MovieCard
                  key={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                  id={movie.imdbID}
                />
              </Grid>
            );
          })}

        </Grid>
      </div>
    );
  }
}
