import React, { Component } from 'react'
import MovieCard from './MovieCard'
import { Grid } from '@material-ui/core'

const styles = {
  GridContainer: {
    padding: '20px',
    margin: 'auto'
  }
}

export default class MovieCardGrid extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return (this.props.mymovies !== nextProps.mymovies)
  }

  render () {
    console.log('render grid: ' + this.props.mymovies)

    return (
      <div>
        <Grid
          container
          spacing={3}
          style={styles.GridContainer}
        >
          {this.props.mymovies.map(movie => {
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
            )
          })}

        </Grid>
      </div>
    )
  }
}
