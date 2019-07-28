import React from 'react'
import ArtistCardList from './artist/views/ArtistCardList'
// import ArtistCardDetail from './artist/ArtistCardDetail'
import AlbumCardList from './album/AlbumCardList'

// export default class Content extends Component {
//   render () {
//     return (

//     )
//   }
// }

function Content() {
  return (
    <div>
      <h3>Artists</h3>
      <ArtistCardList />
      <h3>Albums</h3>
      <AlbumCardList />
      {/* <ArtistCardDetail /> */}
    </div>
  )
}

export default Content
