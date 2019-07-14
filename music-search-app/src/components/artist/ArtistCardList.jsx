import React, { Component } from 'react'
import ArtistCard from './ArtistCard'
import { GridList, GridListTile } from '@material-ui/core'
import ArtistActionCreators from './ArtistActionCreators'

import ArtistStore from './ArtistStore'

const tileData = [
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  },
  {
    img: 'https://www.theaudiodb.com/images/media/artist/thumb/wuprus1340023845.jpg',
    title: 'Contemplative Reptile'
  }
]

const useStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    marginTop: '20px'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  gridListTile: {
    width: '160px'
  }
}

function getStateFromStore () {
  return {
    artistList: ArtistStore.getArtistList()
  }
}

export default class ArtistCardList extends Component {
  constructor (props) {
    super(props)
    this.state = getStateFromStore()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    ArtistActionCreators.getArtistList('Sting')
    ArtistStore.addChangeListener(this.onChange)
  }

  componentWillUnmount () {
    ArtistStore.removeChangeListener(this.onChange)
  }

  onChange () {
    this.setState(getStateFromStore())
  }

  render () {
    return (
      <div style={useStyles.root}>
        {this.state.artistList}
        <GridList style={useStyles.gridList}>
          {tileData.map(tile => (
            // TODO: Add map key
            <GridListTile style={useStyles.gridListTile} >
              <ArtistCard />

            </GridListTile>
          ))}
        </GridList>

      </div>
    )
  }
}
