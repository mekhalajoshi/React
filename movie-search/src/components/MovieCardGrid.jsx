import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { Grid } from '@material-ui/core';

const styles = {
  GridContainer: {

    padding: '20px',
  },
}



export default class MovieCardGrid extends Component {


  render() {
    return (
      <div>
        <Grid
          container
          justify="center"
          spacing={3}
          style={styles.GridContainer}
        >
          {[0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(value => (
            <Grid item>
              <MovieCard onClick={this.handleClickOpen} />

            </Grid>
          ))}
        </Grid>

      </div>
    );
  }
}
