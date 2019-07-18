import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import AlbumActionCreators from './AlbumActionCreators'
import AlbumCard from './AlbumCard'

import AlbumStore from './AlbumStore'

// Private function that gets values from store
function getStateFromAlbumStore () {
  // console.log('AlbumCardList ' + this.state.albumList)
  return {
    albumList: AlbumStore.getAlbumList()
  }
}

export default class AlbumCardList extends Component{
  constructor (props) {
    super(props)
    
    // Set view's state based on store data
    this.state = getStateFromAlbumStore()
    this.onAlbumChange = this.onAlbumChange.bind(this)
  }

  // Subscribe to store events on mount
  componentDidMount () {
    AlbumActionCreators.getAlbumList('111239')
    AlbumStore.addChangeListener(this.onAlbumChange)
  }

  // Un-Subscribe to store events on un-mount
  componentWillUnmount () {
    AlbumStore.removeChangeListener(this.onAlbumChange)
  }

  // Store uses this as callback fn when store is updated
  onAlbumChange () {
    this.setState(getStateFromAlbumStore())
  }


  render(){
    const { albumList } = this.state
    return(
      <div style={useStyles.root}>
        <GridList style={useStyles.gridList}>
          {albumList.map(tile => (
            // TODO: Add map key
            <GridListTile 
              style={useStyles.gridListTile}
              key={tile.idAlbum}
            >
              <AlbumCard 
                strAlbum={tile.strAlbum} 
                strAlbumThumb={tile.strAlbumThumb}
              />
            </GridListTile>
          ))}
        </GridList>

      </div>
      
    )
  }
}
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