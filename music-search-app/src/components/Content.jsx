import React, { Component } from 'react';
import ArtistCardList from './artist/ArtistCardList';
import ArtistCardDetail from './artist/ArtistCardDetail';

export default class Content extends Component {
  render() {
    return (
      <div>
        Content
        <ArtistCardList />
        <ArtistCardDetail />
      </div>
    );
  }
}
