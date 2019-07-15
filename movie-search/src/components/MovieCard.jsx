import React, { Component } from 'react'
import MovieDetails from './MovieDetails'
import PropTypes from 'prop-types';
import { getMoviesById} from '../api/getOmdbData.js'

import { Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core'

const styles = {
  Card: {
    width: '250px',
    height: '400px',
    margin: 'auto'

  },
  CardMedia: {
    width: 'auto',
    height: '100%',
    maxHeight: '350px',
    maxWidth: '250px',
    margin: 'auto'
  },
  CardContent: {
    padding: '5px'
  },
  Typography: {
    margin: 0,
    overflowWrap: 'break-word'
  }
}

// const movie = {
//   Title: 'Rogue One: A Star Wars Story',
//   Year: '2016',
//   imdbID: 'tt3748528',
//   Type: 'movie',
//   Poster: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
//   Plot: 'The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.',
//   Actors: 'Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen'
// }

export default class MovieCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      MovieDetails: [],
      open: false
    }
  }
  async getMovieDetails(){
    const m = await getMoviesById(this.props.imdbID);
    this.setState({
      MovieDetails: m
    })
    return m
  }
  handleClickClose=()=>{
    this.setState({
      open: !this.state.open,
    })  
  }

  handleClickOpen = () => {
    this.getMovieDetails(this.props.imdbID)
    this.setState({
      open: !this.state.open,
    })  

  }

  render () {
    return (
      <div>
        <Card
          style={styles.Card}
        >
          <CardActionArea
            onClick={this.handleClickOpen}
          >
            <CardMedia
              style={styles.CardMedia}
              component="img"
              alt={this.props.title}
              image={this.props.poster}
              title={this.props.title}
            />
            <CardContent
              style={styles.CardContent}
            >
              <Typography
                style={styles.Typography}
                gutterBottom
                variant="subtitle2" >
                {this.props.title}
              </Typography>
            </CardContent>

            <MovieDetails
              open={this.state.open}
              onClose={this.handleClickClose}
              key={this.props.imdbID}
              title={this.props.title}
              poster={this.props.poster}
              year={this.props.year}
              imdbID={this.props.imdbID}
              plot={this.state.MovieDetails.Plot}
              actors={this.state.MovieDetails.Actors}
            />
          </CardActionArea>

        </Card>

      </div>
    )
  }
}

MovieCard.propTypes = {
  imdbID: PropTypes.string,
  title:PropTypes.string,
  poster:PropTypes.string,
  year:PropTypes.string,
  getMovieDetails: PropTypes.func,
};