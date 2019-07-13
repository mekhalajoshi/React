import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './artist.css'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = {
  width: '150px',
  height: '200px'
}

// TODO: Add overflow to content
export default class ArtistCard extends Component {
  render () {
    return (
      <Card style={useStyles} >
        <CardActionArea style={{ padding: '5px' }}>
          <CardMedia
            className="artist-card__media"
            component="img"
            alt="Contemplative Reptile"
            image="https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg"
            title="Contemplative Reptile"
          />
          <CardContent style={{ padding: '0' }}>
            <Typography gutterBottom variant="subtitle1">
              Sting
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

ArtistCard.propTypes = {
  idArtist: PropTypes.string.isRequired,
  strArtist: PropTypes.string.isRequired,
  strArtistThumb: PropTypes.string.isRequired
}
