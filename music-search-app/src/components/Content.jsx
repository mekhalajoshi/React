import React, { Component } from 'react'
import ArtistCardList from './artist/ArtistCardList'
import ArtistCardDetail from './artist/ArtistCardDetail'

export default class Content extends Component {
  render () {
    console.log()
    return (
      <div>
        <h3>Artists</h3>
        <ArtistCardList />
        <ArtistCardDetail />
      </div>
    )
  }
}
