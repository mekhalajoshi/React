import React, { Component } from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'
// import { getMoviesById} from '../api/getOmdbData.js'

const styles = {
  GridContainer: {
    padding: '20px',
    margin: 'auto'
  }
}

export default class MovieCardGrid extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: 'happy',
      movieDetails:[]
    }
  }
  // async componentDidMount () {
  //   const m = await getMoviesById(this.state.searchTerm)
  //   this.setState({
  //     movieDetails: m
  //   })
  //   console.log('MovieSearchApp movieDetails    :' + this.state.mymovies)
  // }

  shouldComponentUpdate (nextProps, nextState) {
    return (this.props.mymovies !== nextProps.mymovies)
  }

  // async getMovieDetails(data){
  //   const m = await getMoviesById(data);
    // console.log(m)

    // this.setState({
    //       movieDetails: m
    //     })
    // console.log(m)
  //   return m
  // }

  render () {

    return (
      <div>
        <Grid
          container
          spacing={3}
          style={styles.GridContainer}
        >
          {this.props.mymovies.map(movie => {
            return (
              <Grid item key={movie.imdbID} style={{ marginBottom: '10px' }} >
                <MovieCard
                  key={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                  imdbID={movie.imdbID}
                  getMovieDetails={this.getMovieDetails}
                  movieDetails={this.state.movieDetails}
                />
              </Grid>
            )
          })}

        </Grid>
      </div>
    )
  }
}
MovieCardGrid.propTypes = {
  mymovies: PropTypes.array,
};