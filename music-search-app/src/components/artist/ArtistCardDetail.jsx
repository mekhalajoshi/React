import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ArtistCardDetail extends Component {
  render () {
    return (
      <div>
        ArtistCardDetail
      </div>
    )
  }
}

ArtistCardDetail.propTypes = {
  idArtist: PropTypes.string,
  strArtist: PropTypes.string,
  strArtistThumb: PropTypes.string,
  intFormedYear: PropTypes.number,
  strStyle: PropTypes.string,
  strBiographyEN: PropTypes.string,
  strWebsite: PropTypes.string
}
