import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import { Card, CardMedia, CardActionArea, CardContent, Typography, Button, } from '@material-ui/core';

const styles = {
  Card: {
    width: '250px',
  },
  CardMedia: {
    width: '250px',
    height: '350px',
  },
  CardContent: {
    padding: '5px',
  },
  Typography: {
    margin: 0,
    overflowWrap: 'break-word',
  }
}

const movie = {
  Title: "Rogue One: A Star Wars Story",
  Year: "2016",
  imdbID: "tt3748528",
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
  Plot: "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
  Actors: "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
}

export default class MovieCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }
  handleClickToggle = () => {
    this.setState({
      open: !this.state.open

    });
  }

  render() {
    return (
      <div>
        <Card
          style={styles.Card}
        >
          <CardActionArea

          >
            <Button onClick={this.handleClickToggle}>
              <CardMedia
                style={styles.CardMedia}
                component="img"
                alt="Contemplative Reptile"
                image="https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
                title="Contemplative Reptile"

              />
              <CardContent
                style={styles.CardContent}
              >
                <Typography
                  style={styles.Typography}
                  gutterBottom
                  variant="subtitle1" >
                  LizardLizardLizardLizardLizardLizardLizard
          </Typography>
              </CardContent>
            </Button>
            <MovieDetails
              open={this.state.open}
              onClose={this.handleClickToggle}
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              plot={movie.Plot}
              year={movie.Year}
              id={movie.imdbID}
              actors={movie.Actors}
            />
          </CardActionArea>

        </Card>


      </div>
    );
  }
}
